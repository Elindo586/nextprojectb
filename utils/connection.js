// import mongoose from "mongoose";

// const createConnectionManager = () => {
//   let current = null;

//   return {
//     connect: async () => {
//       if (current) return current;
//       // I think the options you are passing are deprecated/removed from mongoose
//       const instance = await mongoose.connect(process.env.MONGODB_URI);
//       return instance;
//     },
//   };
// };

// export const manager = createConnectionManager();
