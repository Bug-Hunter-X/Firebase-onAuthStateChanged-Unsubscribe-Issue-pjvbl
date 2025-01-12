const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  console.log(user);
} else {
  // User is signed out
}
});

useEffect(() => {
  return () => {
    if (unsubscribe) { //Check if unsubscribe function exists
      unsubscribe();
    }
  };
}, []);