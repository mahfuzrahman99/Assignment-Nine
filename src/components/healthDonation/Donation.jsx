/* eslint-disable react/prop-types */
const Donation = ({ aDonation }) => {
  // eslint-disable-next-line no-unused-vars
  const { m_id, m_title, m_img, m_details, m_phone_number,m_email, m_address } =
    aDonation || {};
  return (
    <div className="max-w-6xl mx-auto p-3 border mb-10 rounded-xl border-orange-200">
      <h3 className="text-3xl md:text-5xl my-6 font-bold">{m_title}</h3>
      <div>
        <img
          className="rounded-xl h-[300px] md:h-[500px] w-full"
          src={m_img}
          alt={m_title}
        />
      </div>
      <p className=" font-medium"><span className="text-xl font-bold">Donation Details: </span>{m_details}</p>
      <hr className="h-1 my-2 bg-black" />
      <div className="md:grid grid-cols-10 border rounded-md border-gray-300 p-3 mb-4 items-center">
        <div className="col-span-6">
          <h2 className="md:text-xl  md:font-extrabold font-medium text-rose-400">If You Want To Know About Donation Or More Details</h2>
          <p className="md:text-xl  md:font-extrabold font-medium text-rose-400">
            If you want to make a donation through us, please kindly get in
            touch.
          </p>
        </div>
        <div className="col-span-4">
          <p><span className="text-lg font-medium">Phone:</span> {m_phone_number}</p>
          <p><span className="text-lg font-medium">Email:</span> {m_email}</p>
          <p><span className="text-lg font-medium">Address:</span> {m_address}</p>
        </div>
      </div>
    </div>
  );
};

export default Donation;
