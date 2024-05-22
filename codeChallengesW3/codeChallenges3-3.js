//Given an array of integers your solution should find the smallest integer.
//To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => a - b);
        return args[0];
        
      
    }
  }
  const finder = new SmallestIntegerFinder();
  const args = [78,56,232,12,8];
  console.log(finder.findSmallestInt(args));