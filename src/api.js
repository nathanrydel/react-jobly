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
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

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

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...
  //TODO: getCompanies

  /** Get and return a list of all companies */

  static async getCompanies(nameLike) {
    const filteredData =
      (Object.entries({ nameLike }).filter(([_, value]) => value !== undefined));

    let res = await this.request(`companies`, Object.fromEntries(filteredData));

    return res.companies;

    // let res = await this.request(`companies`, nameLike); // FIXME: search
    // // let res = await this.request(`companies`);
    // return res.companies;
  }

  /** Get a list of all jobs */
  //TODO: getJobs
  static async getJobs(title) {
    const filteredData =
      (Object.entries({ title }).filter(([_, value]) => value !== undefined));

    let res = await this.request(`companies`, Object.fromEntries(filteredData));

    return res.companies;

    // let res = await this.request(`jobs`, { title }); // FIXME: search
    // let res = await this.request(`jobs`);
    // return res.jobs;
  }

  //TODO: getJob -- Probably in Part 2

}

export default JoblyApi;