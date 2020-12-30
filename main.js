function arrayMaximalAdjacentDifference(nums) {
   let maxDiff = Math.abs(nums[0] - nums[1])
   for (let idx = 1; idx < nums.length - 1; idx++) {
      if (Math.abs(nums[i] - nums[i + 1]) > maxDiff){
         maxDiff = Math.abs(nums[i] - nums[i + 1])
      }
   }
   return maxDiff
}



/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
   it('returns largest difference between adjacent values', () => {
       // arrange
       const nums = [2, 4, 1, 0];
       
       // act
       const result = arrayMaximalAdjacentDifference(nums);

       // log
       console.log("result 1: ", result);
       
       // assert
       expect(result).toBe(3);
   });

   it('returns largest difference between adjacent values example 2', () => {
       // arrange
       const nums = [2, 9, 1, 0];
       
       // act
       const result = arrayMaximalAdjacentDifference(nums);

       // log
       console.log("result 2: ", result);
       
       // assert
       expect(result).toBe(8);
   });
});