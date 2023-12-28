function main(counter){
    setTimeout(() => {
        console.log(counter++);
        main(counter);
    }, 1000);
}

main(1);