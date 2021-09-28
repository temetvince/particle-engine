export const tryCatch = async (
   callback: (...args: never[]) => never
): Promise<unknown> => {
   try {
      return await callback();
   } catch (err) {
      console.log(err);
   }
};
