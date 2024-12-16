To fix this, make sure to always handle the asynchronous nature of Firebase operations.  Use `.then()` to chain a callback function that will execute only after the promise resolves, or use `async/await` for a more readable approach.

Here's how you'd fix the code using `.then()`:

```javascript
db.collection('myCollection').doc('myDoc').get().then((docSnapshot) => {
  if (docSnapshot.exists()) {
    console.log('Data:', docSnapshot.data());
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error:', error);
});
```

And here's the `async/await` version:

```javascript
async function getData() {
  try {
    const docSnapshot = await db.collection('myCollection').doc('myDoc').get();
    if (docSnapshot.exists()) {
      console.log('Data:', docSnapshot.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```