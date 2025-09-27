function Hello() {

    let MyName = 'Suraj';
    let number = 12345;
    let fullName = () => {
        return 'Suraj Singh';
    }

    return <div>
         <p>Hello you all. I am {MyName}</p>
         <div>
            Hello You all. I am  {fullName()}
         </div>
         <div>
            MessageNo: {number}
         </div>
    </div>
    
}

export default Hello;