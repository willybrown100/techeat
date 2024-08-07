import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6';
import QuestionList from './QuestionList';
import Questions from './Questions';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button';

const questions = [
  {
    title: "what is tech eat",
    desc: "Tech eat is a food ordering web app, designed for tech studio students and staffs it allows    you to browse a curated menu, place orders, and enjoy delicious meals delivered to you.",
  },
  {
    title: "How do i place an order?",
    desc: "To place an order simply visit the techeats website, browse the menu select your desired items and proceed to checkout You’ll receive a confirmation and estimated delivery time",
  },
  {
    title: "What payment methods are accepted?",
    desc: " Techeat accepts payment through paystack a secure and reliable payment platform that supports variuos payment methods including bank cards and mobile payments",
  },
  {
    title: "Is Techeat available on mobile devices?",
    desc: "Yes, techeat is accessible via any web browser on your desktop, tablet, or smartphone",
  },
  {
    title: "Are there any promotions or discounts available?",
    desc: "To support our students vendors, we charge a minimal service fee for delivery. The applicable fee will be displayed at checkout. ",
  },
  {
    title: "Can i schedule orders in advance?",
    desc: "Yes, techeat allows you toschedule orders in advance. You can select your preferred delivery time during the checkout process ",
  },
  {
    title: "How do i know if my ordeer has been confirmed?",
    desc: "Once you place your order, you will receive a confirmation notification on the website and via email you can also track the status of your order in real-time within the web app.",
  },
  {
    title: "What should i do if i have a problem with my order?",
    desc: "If you encounter any issues with your order and need futher assistance, please click on the contact us’’ button on the website. You will be directed to drop a message, which will be responded to promptly by our support team. ",
  },
  {
    title: "Can i customize my order?",
    desc: "Yes, you can customize your order by adding special instructions for each menu item. our vendors will do their best to accomodate your request",
  },
  {
    title: "What safety measures are in place for food delivery?",
    desc: " Techeat follows strict and hygienic protocols to ensure that all food is prepared and delivered safely. Our vendores adhere to all health regulations, and our delivery personnel will deliver safely handed.",
  },
  {
    title: "How do i become a vendor on Techeat",
    desc: " if you’re interested in becoming a vendor, please contact us through the ‘Become a vendor’ section on the website for more information on the registration process. ",
  },
  {
    title: "Can i cancel my order?",
    desc: " Orders can be canceled within a few minutes of placements Go to your order history, select the order, and click on ‘‘Cancel Order’’, if the order is already being prepared or out for delivery, cancellation may not be possible",
  },
  {
    title: "How can i provide feedback about my experience?",
    desc: "  We value your feedback! you can rate your experience and leave comments on the website after you order is delivered. This helps us improve our service",
  },
];

export default function Faq() {
    const className = "max-w-[1100px]  py-6 m-auto";
    const navigate = useNavigate()
    const handleClick = function(){
navigate(-1)
    }
  return (
    <article className={`${className}`}>
      <button onClick={handleClick} className="mr-auto">
        <FaChevronLeft className="text-stone-700 text-2xl" />
      </button>
      <h3 className="font-headings  uppercase text-center font-semibold text-brand">
        faq
      </h3>

      <QuestionList
        questions={questions}
        render={(item) => <Questions item={item} key={item.title} />}
      />
      <div className='w-[50%]  m-auto'>
      <h4 className="text-black flex flex-col text-center font-semibold font-headings ">
        For any assistance, click the ‘’Contact Us’’ button to drop a message,
        <span className='mt-2'>and our support team will respond promptly</span>
      </h4>
      <Button className="text-center w-full">contact us</Button>
      </div>
    </article>
  );
}
