import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{

    const loginToken= await login({userName:"pal19028@byui.edu", password:"654321Up!"});

    assert.equal(loginToken.length,36);
})