function totalUsers(lastUserId) {
    const totalIdentifiers = lastUserId;

    const multiplesOf13 = Math.floor(lastUserId / 13);

    const totalUsers = totalIdentifiers - multiplesOf13;

    return totalUsers;
}


const lastUserId = 100;
console.log(totalUsers(lastUserId)); 