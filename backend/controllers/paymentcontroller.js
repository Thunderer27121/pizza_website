import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET
})
export async function createOrder(req ,res){
    try {
  const {amount} = req.body;
  console.log(amount);
  if(!amount){
    return res.status(400).json({message : "amount not received"});
  }    
    const order = await razorpay.orders.create({
        amount : amount* 100,
         currency: "INR",
         receipt : "receipt"+Date.now(),
    });
    res.status(201).json({message : "order created", order});
    
  } catch (error) {
    return res.status(500).json({message : "internal server error"});
  }
}

export async function verifyPayment(req, res){
  console.log("VERIFY req.body =", req.body);
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({ message: "Missing payment details" });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      res.status(200).json({
        success: true,
        message: "Payment verified successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};