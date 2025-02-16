// Word Search
// 1) traverse the complete board for the starting point
// 2) if the matching letter if found traverse in all directions of the board to find the next matching letter
// 3) mark that position of the board to indicate already traversed location
// 4) if the length of traversed items is equal to words it means the word is found and set result as true
var exist = function (board, word) {
  var l = word.length;
  var m = board.length - 1;
  var n = board[0].length - 1;
  let result = false;

  var rec = (i, j, k) => {
    // if we have traversed all the letters of the word it means we have found the word and return true
    if (k === l) {
      result = true;
      return;
    }
    // if we are outside the bounds of board or if we already traversed that part of board return
    if (i < 0 || j < 0 || i > m || j > n || board[i][j] == "*") {
      return false;
    }

    // if the matching character is found traverse in all 4 directions of the board to look for the next letter
    if (board[i][j] === word[k]) {
      // mark the board to check if we already have traversed to this coordinate
      board[i][j] = "*";
      rec(i + 1, j, k + 1);
      rec(i, j + 1, k + 1);
      rec(i - 1, j, k + 1);
      rec(i, j - 1, k + 1);
      // reset the board with correct letter after traversing in all directions
      board[i][j] = word[k];
    }
  };

  // loop the board for the starting point
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      rec(i, j, 0);
      if (result) return true;
    }
  }
  return false;
};

// Combination Sum
var combinationSum = function (candidates, target) {
  let c = candidates;
  let result = [];
  let l = candidates.length - 1;
  let csum = (start, curr, sum) => {
    if (sum === target) {
      result.push(curr);
      return;
    }
    if (sum > target || start > l) return;
    // consider we are adding this value
    csum(start, [c[start], ...curr], c[start] + sum);
    // consider we are skipping this value
    csum(start + 1, [...curr], sum);
  };
  csum(0, [], 0);
  return result;
};

var reverseList = function (head) {
  let node = null;
  while (head) {
    temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }
  return node;
};

// Clone Graph
// 1) run dfs algo
// 2) if a obejct exists in map return that object
// 3) else create a new object in the map with empty neighbours list
// 4) iterate through the neihbhours and call recursion funtion and push its value inside neighbours
// 5) return the map object of that node
var cloneGraph = function (node) {
  let map = [];
  let rec = (nodal) => {
    // if object exists in map return
    if (map[nodal.val]) {
      return map[nodal.val];
    }
    map[nodal.val] = { val: nodal.val, neighbors: [] };
    nodal.neighbors.forEach((item) => {
      // call recursion to get recursive object of neighbour
      map[nodal.val].neighbors.push(rec(item));
    });
    // return that nodes object
    return map[nodal.val];
  };
  let clone;
  if (typeof node == "object" && node) {
    clone = rec(node);
  }
  return clone;
};

// Course Schedule
// 1) create a adjacency list based on courses
// 2) Iterate over the adjacency list and call bfs on the list
// 3) maintain 2 hashmaps one for the overall nodes visited and other for nodes visited in current bfs traversal
// * set nodes as visted before calling bfs and set it to false after calling bfs as its a directed graph one node can
//  visited form two nodes without being cyclical
// 4) if the node is already visited in current dfs traveral that means its cyclical graph so set result to false
// 5) if the node is already visited in overall dfs traveral that its not cyclical and return for that
var canFinish = function (numCourses, prerequisites) {
  let adList = [];
  let nodeVisited = Array(numCourses).fill(false);
  let dfsVisited = Array(numCourses).fill(false);
  for (let i = 0; i < prerequisites.length; i++) {
    if (!adList[prerequisites[i][0]]) adList[prerequisites[i][0]] = [];
    adList[prerequisites[i][0]].push(prerequisites[i][1]);
  }

  let result = true;
  function dfs(node) {
    if (!node || !result) return;
    for (let i = 0; i < node.length; i++) {
      let item = node[i];
      if (nodeVisited[item]) continue;
      if (dfsVisited[item] || !result) {
        result = false;
        return;
      }
      dfsVisited[item] = true;
      dfs(adList[item]);
      dfsVisited[item] = false;
    }
  }
  for (let i = 0; i < adList.length; i++) {
    if (!result) break;
    dfsVisited = Array(numCourses).fill(false);
    dfs(adList[i]);
    nodeVisited[i] = true;
  }
  return result;
};

// Valid Tree
// 1) create a adjacency list based on courses, as it is undirected create edge for both nodes
// 2) call bfs from initial node as its a tree all nodes should be connected and it shouldnt be cyclical
// 3) maintain hashmap nodes visited in current bfs traversal to detect cycle
// 4) keep track of current node and parent node so that we dont traverse on the parent node again
// 5) also keep track of the number of nodes visited as all nodes should be visited in a tree from dfs
var validTree = (numCourses, prerequisites) => {
  let adList = [];
  let dfsVisited = Array(numCourses).fill(false);
  for (let i = 0; i < prerequisites.length; i++) {
    if (!adList[prerequisites[i][0]]) adList[prerequisites[i][0]] = [];
    if (!adList[prerequisites[i][1]]) adList[prerequisites[i][1]] = [];

    adList[prerequisites[i][0]].push(prerequisites[i][1]);
    adList[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  let visitedNodes = 0;
  let result = true;
  function dfs(node, current, parent) {
    visitedNodes++;
    if (!node || !result) return;
    for (let i = 0; i < node.length; i++) {
      let item = node[i];
      if (item === parent) continue;
      if (dfsVisited[item] || !result) {
        result = false;
        return;
      }
      dfsVisited[item] = true;
      dfs(adList[item], item, current);
    }
  }
  dfs(adList[0], 0, undefined);
  if (visitedNodes !== numCourses) result = false;
  return result;
};

// House Robber
// 1) basically a dp problem
// 2) set value of house 1 and house 2(max of 1 and 2 as only 1 can be robbed)
// 3) find the max values starting from 3rd house
// 4) value will be max memo of current house + skipping previous house(i-2) or memo of previos house (i-1)
// 5) If its circular array there are three cases 1)exclude first house 2) exclude last house 3) array is less than 3(normal algo)
var rob = function (nums) {
  let house = [];
  let l = nums.length - 1;
  house[0] = nums[0];
  house[1] = max(nums[0], nums[1]);
  for (let i = 2; i <= l; i++) {
    house[i] = max(house[i - 1], nums[i] + house[i - 2]);
  }
  return house[l];
  function max(i, j) {
    if (i > j) return i;
    else return j;
  }
};

// Longest Palindrome
var longestPalindrome = function (s) {
  let longest = s[0];
  l = s.length - 1;
  function expand(left, right, temp = "") {
    while (right < l + 1 && left >= 0 && s[left] == s[right]) {
      temp = s[left] + temp + s[right];
      right++;
      left--;
    }
    if (temp.length > longest.length) longest = temp;
  }
  for (let i = 1; i < l + 1; i++) {
    expand(i - 1, i);
    expand(i - 1, i + 1, s[i]);
  }
  return longest;
};

// Coins Change
// 1) iterate through 1 to target amount and intit memo[0]=0 as to reach 0 amount we need 0 coins
// 2) the iterate through the coins array
var coinChange = function (coins, amount) {
  memo = Array(amount + 1).fill(Math.min());
  let l = coins.length;
  memo[0] = 0;
  for (i = 1; i <= amount; i++) {
    for (j = 0; j < l; j++) {
      if (i - coins[j] >= 0) {
        //save the lowest amount of coins required
        memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1);
      }
    }
  }
  if (memo[amount] > amount) return -1;
  else return memo[amount];
};

// Maximum Product Subarray
var maxProduct = function (nums) {
  let l = nums.length;
  let max = nums[0];
  let min = nums[0];
  let result = max;
  for (let i = 1; i < l; i++) {
    temp = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(nums[i], max * nums[i], min * nums[i]);
    max = temp;
    if (temp > result) result = temp;
  }
  return result;
};

// Word Break
var wordBreak = function (s, wordDict) {
  l = s.length;
  map = {};
  wordDict.forEach((word) => {
    map[word] = true;
  });
  memo = Array(l).fill(false);
  memo[0] = true;

  for (let i = 1; i < l + 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (memo[j] && map[s.substring(j, i)]) {
        memo[i] = true;
        break;
      }
    }
  }
  return memo[l] || false;
};

//Longest Increasing Subsequence
var lengthOfLIS = function (nums) {
  l = nums.length;
  memo = Array(l).fill(1);
  for (let i = 1; i < l; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        memo[i] = Math.max(memo[j] + 1, memo[i]);
      }
    }
  }
  return Math.max(...memo);
};

//Longest Common Subsequence
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let memo = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] == text2[j - 1]) memo[i][j] = memo[i - 1][j - 1] + 1;
      else memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }
  return memo[m][n];
};
