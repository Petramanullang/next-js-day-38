import { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    if (blog.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((data) => setBlog(data));
    }
  }, [blog]);

  return (
    <>
      {blog.length === 0 ? (
        <div className="text-blue-500 w-full h-[100vh] grid place-items-center text-3xl">Loading...</div>
      ) : (
        <div className="bg-background">
          <div className="max-w-screen-lg mx-auto relative">
            <main>
              <div className="mb-4 md:mb-0 w-full mx-auto relative">
                <div className="px-4 lg:px-0">
                  <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nemo culpa sint at aliquid eaque, quae tenetur harum
                    voluptatibus odit facilis.
                  </h2>
                  <a
                    href="#"
                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
                    Lorem Ipsum
                  </a>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                  className="w-full object-cover lg:rounded"
                  style={{ height: "28em" }}
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                  <ul>
                    {blog.map((post) => (
                      <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p className="text-justify">{post.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                  <div className="p-4 border-t border-b md:border md:rounded">
                    <div className="flex py-2">
                      <img
                        src="/Profile.jpeg"
                        className="h-10 w-10 rounded-full mr-2 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 text-sm">
                          {" "}
                          Petra Juliansen{" "}
                        </p>
                        <p className="font-semibold text-gray-600 text-xs">
                          {" "}
                          Editor{" "}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 py-3 text-left">
                      Petra writes about technology Yourself required no at
                      thoughts delicate landlord it be. Branched dashwood do is
                      whatever it.
                    </p>
                    <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                      Follow
                      <i className="bx bx-user-plus ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
