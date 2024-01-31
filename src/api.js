const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static token;

  static async request(endpoint, data = {}, method = "GET") {
    console.log("API request with: ", endpoint, data, method);
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    console.log('API pre-request url, method, body, headers', url, method, body, headers);
    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  // TODO: Not really checking -- just returning, and error is handled elsewhere
  // It returns a user.
  /** Check that a user exists and return the user */
  static async getUser(username){
    const res = await this.request(`users/${username}`)
    return res.user;
  }

  /** Create a new user by signing up (available to non-admins) */
  // TODO: be more specific about parameter names (not just *data*)
  static async signUp(data) {
    let res = await this.request(`auth/register`, data, 'POST');
    return res.token;
  }

  /** Update a user account */
  static async updateProfile(username, userData) {
    let res = await this.request(`users/${username}`, userData, 'PATCH');
    return res.user;
  }

  /** Log in and set the token */
  // TODO: be more specific about parameter names (not just *data*)
  // There is a benefit to setting JoblyApi.token here.
  // Every call you make from the api class makes a call to just here,
  // never used in the app, (makes it easier for app devs to understand it.)
  // buuuuuuut, it's necessary to bring it out into the app to use in
  // localstorage.
  static async login(data) {
    let res = await this.request(`auth/token`, data, 'POST');
    return res.token;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get and return a list of all companies */

  static async getCompanies(nameLike) {
    const filteredData =
      (Object.entries({ nameLike })
        .filter(([_, value]) => value !== undefined && value !== ""));

    console.log('filteredData in getCompanies', filteredData);
    let res = await this.request(`companies`, Object.fromEntries(filteredData));

    return res.companies;
  }

  /** Get a list of all jobs */
  static async getJobs(title) {
    const filteredData =
      (Object.entries({ title })
        .filter(([_, value]) => value !== undefined && value !== ""));

    let res = await this.request(`jobs`, Object.fromEntries(filteredData));

    return res.jobs;
  }

  //TODO: getJob -- future study?
}

export default JoblyApi;
