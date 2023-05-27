const Blog = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mx-auto w-fit py-6">
        {/* qes: 1 */}
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              <strong>Access Token: </strong>Access token is a short-lived
              credential that is generated to client during authentication
              process. It holds user's authentication information like username
              user's email etc. It is securely stored to client side.
            </p>
            <p>
              <strong>Refresh Token: </strong>Refresh token is a long-lived
              credential that is generated to client during authentication
              process. It is used to regenerate access token to user without
              reauthenticate. It is also securely stored to client side.
            </p>
            <p>
              <p>
                These tokens can be stored in browsers Localstorage. But it is
                more vulnerable for cross site scripting.
              </p>
              <p>
                Also it can be stored as HTTP only cookies. It is more secure
                and less vulnerable for XSS.
              </p>
            </p>
          </div>
        </div>
        {/* qes: 2 */}
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
            <p>
              <p>SQL and NoSQL are different type of databases.</p>
              <p>
                <strong>SQL: </strong>SQL stands for Structured Query Language.
                SQL used to store data following a defined structured. It
                ensures data accuracy and makes whole database easy to organize.
              </p>
              <p>
                <strong>NoSQL: </strong>NoSQL have a more flexible structure. It
                is suitable for handling large amounts of unstructured data. It
                is used for building real time and high scalability
                applications. Such as messaging applications.
              </p>
            </p>
          </div>
        </div>
        {/* qes: 3 */}
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">What is express js? What is Nest JS?</h2>
            <p>
              <p>
                <strong>Express.js: </strong>Express js helps developers to
                create a functioning web application. It has tools that make it
                easy to handle requests, responses and connect to a database
                system. It allows developers to define routes and handle
                deferent types of requests.
              </p>
              <p>
                <strong>Nest.js: </strong>Nest js built with Typescript that
                helps developers to write clean organized codes. Nest js
                provides structures and set of tools that make it easy for
                developers to build powerful and scalable web applications.
              </p>
            </p>
          </div>
        </div>
        {/* qes: 4 */}
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p>
              MongoDB's aggregate is a feature that allows to advances
              calculation and transformations on data stored in database. It
              works taking data and applying set of operations such as
              filtering, grouping and sorting. These operations are called
              stages. The result of one stage becomes input for next stage,
              creating a pipeline of operations. At the end of pipeline we get
              the desired output. Such as aggregated results, transformated
              data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
