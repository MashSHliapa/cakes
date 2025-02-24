import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'yandex',
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'maria.shliapa.dev@yandex.ru',
    pass: process.env.PASSWORD,
  },
});

app.post('/send-email', upload.single('file'), async (req, res) => {
  try {
    const { name, email, phone, option, text, agreement } = req.body;

    const file = req.file;

    const mailOptions = {
      from: 'maria.shliapa.dev@yandex.ru',
      to: 'maria.shliapa.dev@yandex.ru',
      subject: 'Заказ на сайте',
      text: `Имя: ${name}
      \nEmail: ${email}
      \nPhone: ${phone}
      \nOption: ${option}
      \nText: ${text}
      \nAgreement: ${agreement}`,
    };

    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'success' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something went wrong что-то не так' });
  }
});

///////////get cakes
app.get('/cakes', (req, res) => {
  res.json([
    {
      id: 1,
      image: '../src/components/images/cakes/for_christening/christening1.jpg',
      category: 'for_christening',
    },
    {
      id: 2,
      image: '../src/components/images/cakes/for_christening/christening2.jpg',
      category: 'for_christening',
    },
    {
      id: 3,
      image: '../src/components/images/cakes/for_christening/christening3.jpg',
      category: 'for_christening',
    },
    {
      id: 4,
      image: '../src/components/images/cakes/for_christening/christening4.jpg',
      category: 'for_christening',
    },
    {
      id: 5,
      image: '../src/components/images/cakes/for_christening/christening5.jpg',
      category: 'for_christening',
    },
    {
      id: 6,
      image: '../src/components/images/cakes/for_christening/christening6.jpg',
      category: 'for_christening',
    },
    {
      id: 7,
      image: '../src/components/images/cakes/for_christening/christening7.jpg',
      category: 'for_christening',
    },
    {
      id: 8,
      image: '../src/components/images/cakes/for_children/for_children1.jpg',
      category: 'for_children',
    },
    {
      id: 9,
      image: '../src/components/images/cakes/for_children/for_children2.jpg',
      category: 'for_children',
    },
    {
      id: 10,
      image: '../src/components/images/cakes/for_children/for_children3.jpg',
      category: 'for_children',
    },
    {
      id: 11,
      image: '../src/components/images/cakes/for_children/for_children4.jpg',
      category: 'for_children',
    },
    {
      id: 12,
      image: '../src/components/images/cakes/for_children/for_children5.jpg',
      category: 'for_children',
    },
    {
      id: 13,
      image: '../src/components/images/cakes/for_children/for_children6.jpg',
      category: 'for_children',
    },
    {
      id: 14,
      image: '../src/components/images/cakes/for_children/for_children7.jpg',
      category: 'for_children',
    },
    {
      id: 15,
      image: '../src/components/images/cakes/for_children/for_children8.jpg',
      category: 'for_children',
    },
    {
      id: 16,
      image: '../src/components/images/cakes/for_children/for_children9.jpg',
      category: 'for_children',
    },
    {
      id: 17,
      image: '../src/components/images/cakes/for_children/for_children10.jpg',
      category: 'for_children',
    },
    {
      id: 18,
      image: '../src/components/images/cakes/sphere/sphere1.jpg',
      category: 'sphere',
    },
    {
      id: 19,
      image: '../src/components/images/cakes/sphere/sphere2.jpg',
      category: 'sphere',
    },
    {
      id: 20,
      image: '../src/components/images/cakes/sphere/sphere3.jpg',
      category: 'sphere',
    },
    {
      id: 21,
      image: '../src/components/images/cakes/sphere/sphere4.jpg',
      category: 'sphere',
    },
    {
      id: 22,
      image: '../src/components/images/cakes/sphere/sphere5.jpg',
      category: 'sphere',
    },
    {
      id: 23,
      image: '../src/components/images/cakes/sphere/sphere6.jpg',
      category: 'sphere',
    },
    {
      id: 24,
      image: '../src/components/images/cakes/sphere/sphere7.jpg',
      category: 'sphere',
    },
    {
      id: 25,
      image: '../src/components/images/cakes/sphere/sphere8.jpg',
      category: 'sphere',
    },
    {
      id: 26,
      image: '../src/components/images/cakes/sphere/sphere9.jpg',
      category: 'sphere',
    },
    {
      id: 27,
      image: '../src/components/images/cakes/sphere/sphere10.jpg',
      category: 'sphere',
    },
    {
      id: 28,
      image: '../src/components/images/cakes/pies/pies1.jpg',
      category: 'pies',
    },
    {
      id: 29,
      image: '../src/components/images/cakes/pies/pies2.jpg',
      category: 'pies',
    },
    {
      id: 30,
      image: '../src/components/images/cakes/pies/pies3.jpg',
      category: 'pies',
    },
    {
      id: 31,
      image: '../src/components/images/cakes/pies/pies4.jpg',
      category: 'pies',
    },
    {
      id: 32,
      image: '../src/components/images/cakes/pies/pies5.jpg',
      category: 'pies',
    },
    {
      id: 33,
      image: '../src/components/images/cakes/pies/pies6.jpg',
      category: 'pies',
    },
    {
      id: 34,
      image: '../src/components/images/cakes/pies/pies7.jpg',
      category: 'pies',
    },
    {
      id: 35,
      image: '../src/components/images/cakes/sets/set1.jpg',
      category: 'set',
    },
    {
      id: 36,
      image: '../src/components/images/cakes/sets/set2.jpg',
      category: 'set',
    },
    {
      id: 37,
      image: '../src/components/images/cakes/sets/set3.jpg',
      category: 'set',
    },
    {
      id: 38,
      image: '../src/components/images/cakes/sets/set4.jpg',
      category: 'set',
    },
    {
      id: 39,
      image: '../src/components/images/cakes/sets/set5.jpg',
      category: 'set',
    },
    {
      id: 40,
      image: '../src/components/images/cakes/sets/set6.jpg',
      category: 'set',
    },
    {
      id: 41,
      image: '../src/components/images/cakes/sets/set7.jpg',
      category: 'set',
    },
    {
      id: 42,
      image: '../src/components/images/cakes/for_women/for_women1.jpg',
      category: 'for_women',
    },
    {
      id: 43,
      image: '../src/components/images/cakes/for_women/for_women2.jpg',
      category: 'for_women',
    },
    {
      id: 44,
      image: '../src/components/images/cakes/for_women/for_women3.jpg',
      category: 'for_women',
    },
    {
      id: 45,
      image: '../src/components/images/cakes/for_women/for_women4.jpg',
      category: 'for_women',
    },
    {
      id: 46,
      image: '../src/components/images/cakes/for_women/for_women5.jpg',
      category: 'for_women',
    },
    {
      id: 47,
      image: '../src/components/images/cakes/for_women/for_women6.jpg',
      category: 'for_women',
    },
    {
      id: 48,
      image: '../src/components/images/cakes/for_women/for_women7.jpg',
      category: 'for_women',
    },
    {
      id: 49,
      image: '../src/components/images/cakes/for_women/for_women8.jpg',
      category: 'for_women',
    },
    {
      id: 50,
      image: '../src/components/images/cakes/for_women/for_women9.jpg',
      category: 'for_women',
    },
    {
      id: 51,
      image: '../src/components/images/cakes/for_women/for_women10.jpg',
      category: 'for_women',
    },
    {
      id: 52,
      image: '../src/components/images/cakes/for_men/for_men1.jpg',
      category: 'for_men',
    },
    {
      id: 53,
      image: '../src/components/images/cakes/for_men/for_men2.jpg',
      category: 'for_men',
    },
    {
      id: 54,
      image: '../src/components/images/cakes/for_men/for_men3.jpg',
      category: 'for_men',
    },
    {
      id: 55,
      image: '../src/components/images/cakes/for_men/for_men4.jpg',
      category: 'for_men',
    },
    {
      id: 56,
      image: '../src/components/images/cakes/for_men/for_men5.jpg',
      category: 'for_men',
    },
    {
      id: 57,
      image: '../src/components/images/cakes/for_men/for_men6.jpg',
      category: 'for_men',
    },
    {
      id: 58,
      image: '../src/components/images/cakes/for_men/for_men7.jpg',
      category: 'for_men',
    },
    {
      id: 59,
      image: '../src/components/images/cakes/two_tier/two_tier1.jpg',
      category: 'two_tier',
    },
    {
      id: 60,
      image: '../src/components/images/cakes/two_tier/two_tier2.jpg',
      category: 'two_tier',
    },
    {
      id: 61,
      image: '../src/components/images/cakes/two_tier/two_tier3.jpg',
      category: 'two_tier',
    },
    {
      id: 62,
      image: '../src/components/images/cakes/two_tier/two_tier4.jpg',
      category: 'two_tier',
    },
    {
      id: 63,
      image: '../src/components/images/cakes/two_tier/two_tier5.jpg',
      category: 'two_tier',
    },
    {
      id: 64,
      image: '../src/components/images/cakes/two_tier/two_tier6.jpg',
      category: 'two_tier',
    },
    {
      id: 65,
      image: '../src/components/images/cakes/two_tier/two_tier7.jpg',
      category: 'two_tier',
    },
    {
      id: 66,
      image: '../src/components/images/cakes/for_wedding/wedding1.jpg',
      category: 'for_wedding',
    },
    {
      id: 67,
      image: '../src/components/images/cakes/for_wedding/wedding2.jpg',
      category: 'for_wedding',
    },
    {
      id: 68,
      image: '../src/components/images/cakes/for_wedding/wedding3.jpg',
      category: 'for_wedding',
    },
    {
      id: 69,
      image: '../src/components/images/cakes/for_wedding/wedding4.jpg',
      category: 'for_wedding',
    },
    {
      id: 70,
      image: '../src/components/images/cakes/for_wedding/wedding5.jpg',
      category: 'for_wedding',
    },
    {
      id: 71,
      image: '../src/components/images/cakes/for_wedding/wedding6.jpg',
      category: 'for_wedding',
    },
    {
      id: 72,
      image: '../src/components/images/cakes/for_wedding/wedding7.jpg',
      category: 'for_wedding',
    },
    {
      id: 73,
      image: '../src/components/images/cakes/open/open1.jpg',
      category: 'open_cakes',
    },
    {
      id: 74,
      image: '../src/components/images/cakes/open/open2.jpg',
      category: 'open_cakes',
    },
    {
      id: 75,
      image: '../src/components/images/cakes/open/open3.jpg',
      category: 'open_cakes',
    },
    {
      id: 76,
      image: '../src/components/images/cakes/open/open4.jpg',
      category: 'open_cakes',
    },
    {
      id: 77,
      image: '../src/components/images/cakes/open/open5.jpg',
      category: 'open_cakes',
    },
    {
      id: 78,
      image: '../src/components/images/cakes/open/open6.jpg',
      category: 'open_cakes',
    },
    {
      id: 79,
      image: '../src/components/images/cakes/open/open7.jpg',
      category: 'open_cakes',
    },
  ]);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
