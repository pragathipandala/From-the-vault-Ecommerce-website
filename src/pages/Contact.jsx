const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col" >
      <h2 className="mt-40 font-tenor text-2xl text-text">Contact US</h2>
      <form method="POST" action="https://formspree.io/f/mqkroleg" className="flex flex-col items-center justify-center m-4 ">
        <input className="m-1 px-4 py-2 border-[1px] border-text w-[400px]" type="text" placeholder="Your Name" name="username" required autoComplete="off"/>
        <input className="m-1 px-4 py-2 border-[1px]  border-text w-[400px]" type="email" placeholder="Enter your email" name="email"/>
        <textarea
          className="m-1 px-4 py-2 border-[1px] border-text w-[400px] h-[100px]"
          placeholder="Your Message" name="message"
        ></textarea>
        <input className=" cursor-pointer bg-primary px-6 py-2 mt-2 mb-20 text-text"  type="submit" value="Send" />

      </form>

    </div>
  )
}
export default Contact;