export default function Contact (){
    return (
        <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif]">
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">Contact</h1>
      <form className="mt-12 space-y-6">
        <div>
          <label className="text-gray-800 text-sm block mb-2">Your Name</label>
          <input type='text' placeholder='Name'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Your Email</label>
          <input type='email' placeholder='Email'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Subject</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Message</label>
          <textarea placeholder='Message' rows={6}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
        </div>
        <button type='button'
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-6 py-3 w-full">Send</button>
      </form>
    </div>
    );
}