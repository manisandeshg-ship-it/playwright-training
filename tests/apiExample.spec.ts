import {test, expect, APIRequestContext} from "@playwright/test";

// GET request example

// test("apiExample - GET single post", async ({request}) => {
//     const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
//     expect(response.status()).toBe(200);
//     const body = await response.json();
//     console.log(body);

//   expect(body.id).toBe(1);
//   expect(body.userId).toBeDefined();
//   expect(body.title.length).toBeGreaterThan(0);
// });

// POST request example

// test('Create a new post', async ({ request }) => {
//   const response = await request.post('https://jsonplaceholder.typicode.com/posts',
//     {
//     data: {
//       title: 'Playwright API Test',
//       body: 'Learning API automation',
//       userId: 101
//     }
//   });
//   expect(response.status()).toBe(201);
//   const body = await response.json();
//   console.log(body)
 
//   expect(body.title).toBe('Playwright API Test');
//   expect(body.body).toBe('Learning API automation');
//   expect(body.userId).toBe(101);
//   expect(body.id).toBeDefined(); // API returns a fake ID
//   });


// GET ID 1 country name
test("apiExample - GET country name for ID 1", async ({request}) => {
    const response = await request.get('https://fake-json-api.mock.beeceptor.com/users/1');
    expect(response.status()).toBe(200);
  //  only print country name
    const body = await response.json();
    console.log(body.country);
    //expect(body.country).toBe("Jersey");
});