try {
    if (process.argv[2]) {
        throw "foo";
    }
} catch(ex) {
    console.log(ex);
}
//finally {
//    console.log('done');
//}