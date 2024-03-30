// import { authMiddleware } from "@clerk/nextjs";
 
// // See https://clerk.com/docs/references/nextjs/auth-middleware
// // for more information about configuring your Middleware

// export default authMiddleware();
 
// export const config = {
//   matcher: [
//     // Exclude files with a "." followed by an extension, which are typically static files.
//     // Exclude files in the _next directory, which are Next.js internals.
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     // Re-include any files in the api or trpc folders that might have an extension
//     "/(api|trpc)(.*)"
//   ]
// };



// import { authMiddleware } from "@clerk/nextjs";
 
// export default authMiddleware({
//   publicRoutes: ["/"]
// });

 
// export const config = {
//   matcher: ["/((?!.+\.[\w]+$|_next).)", "/", "/(api|trpc)(.)"]
// };




import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: ['/'],
    // Routes that can always be accessed, and have
    // no authentication information
    ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
    // Protects all routes, including api/trpc.
    // See https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about configuring your Middleware
    matcher: ["/((?!.+\.[\w]+$|_next).)", "/", "/(api|trpc)(.)"],
};