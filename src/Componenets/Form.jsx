import shadow from "../assets/image.png";
const Form = () => {
    return (
        <div>
            <div className="text-center border my-28 w-4/5 mx-auto bg-white ">
      <div className="p-10" style={{backgroundImage: `URL(${shadow})`}}>
        <p className="text-4xl p-3 mt-8">Subscribe to our Newsletter</p>
        <p className="opacity-25 mt-6">Get the latest updates and news right in your inbox!</p>
        <input placeholder='Enter your email' className="p-3 border mt-4 rounded mr-2"type="text" />
        <button className='bg-[#de98c4] p-3 rounded'>Subscribe</button>
      </div>
    </div>
        </div>
    );
};

export default Form;