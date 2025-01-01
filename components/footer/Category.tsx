export default function Category() {
  return (
    <div className="grid grid-cols-2 gap-10 px-8 py-4 my-4">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">لوازم الکتریکی:</div>
        <div className="flex text-gray-500">
          لوازم اداری | ماشین لباسشویی | یخچال | الکترونیک خودرو | تلویزیون |
          تهویه هوا | صوت و تصویر
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">مد و پوشاک:</div>
        <div className="flex text-gray-500">
          پوشاک کودک | زنانه | عینک آفتابی | جواهرات و ساعت | کفش | کیف | لوازم
          جانبی | مردانه
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">خانه و آشپزخانه:</div>
        <div className="flex text-gray-500">
          تجهیزات خانه | دکوراسیون | ظروف و ابزار | لوازم باغبانی | لوازم پخت و
          پز | منبع تغذیه | لوازم جانبی
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">زیبایی و سلامت:</div>
        <div className="flex text-gray-500">
          عینک آفتابی | جواهرات | ساعت زنانه | ساعت مردانه | ادکلن | تجهیزات
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">ساعت و جواهرات:</div>
        <div className="flex text-gray-500">
          عینک آفتابی | جواهرات | ساعت زنانه | ساعت مردانه | ادکلن | تجهیزات
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">کامپیوتر و تکنولوژی:</div>
        <div className="flex text-gray-500">
          کامپیوتر رومیزی | اسپیکر | لپتاپ | هدفون | اسکنر | پروژکتور | پرینتر
        </div>
      </div>
    </div>
  );
}
