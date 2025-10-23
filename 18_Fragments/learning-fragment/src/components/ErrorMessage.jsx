const ErrorMessage = () => {

   let foodItems = ["Dal", "Ghee", "Bread", "Milk", "Sprouts"];

    return <> {foodItems.length === 0 && <h3>I am still hungry.</h3>}
    </>
};

export default ErrorMessage;