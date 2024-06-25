import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

const LoginFormContainer = styled.div`
  width: 400px;
  margin: auto;
  padding: 1rem;
  background-color: #000;
  border-radius: 8px;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const FormHeaderTitle = styled.h2`
  color: #ffffff;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a91da;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  background-color: #121212;
  border: 1px solid #333;
  border-radius: 1rem;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  &::placeholder {
    color: #4c4f53;
  }
`;

const Select = styled.select`
  background-color: #121212;
  border: 1px solid #333;
  border-radius: 1rem;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
`;

const BirthdateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BirthdateLabel = styled.label`
  font-size: 14px;
  color: #4c4f53;
  margin-bottom: 5px;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  color: #1da1f2;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  margin-bottom: 10px;
  align-self: flex-end;
`;
const BirthdateText = styled.p`
  color: #4c4f53;
  margin-bottom: 5px;
  font-size: 12px;
`;
const Text = styled.p`
  color: #fff;
  margin-bottom: 5px;
  font-size: 1rem;
`;
//setUserData propu App componentinden alınır ve form submit olduğunda axiostan başarılı yanıt geldiğinde içerisine formda girilen kullanıcı adı ve axios isteğinden gelen ID bilgileri ile birlikte güncellenir
export default function LoginForm({ setUserData }) {
  //form datalarının tek bir state içerisinde tanımlanması
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    month: "",
    day: "",
    year: "",
  });
  //kullanıcının email mi yoksa telefon mu kullanarak giriş yapmak istediğini tuttuğumuz state
  const [useEmail, setUseEmail] = useState(false);
  //form doldurulurken veya submit edildiğinde oluşan hataları tuttuğumuz state
  const [errors, setErrors] = useState({
    username: "",
    contact: "",
    age: "",
  });
  //uygulama içi yönlendirmeleri yaptığımız. şuanda hangi sayfada olduğumuz,geçmişte ziyaret ettiğimiz sayfalar ve ziyaret edeceğimiz yeni sayfalara yönlendirme yapar.
  const history = useHistory();

  //form inputlarında oluşan değişiklikleri izlediğimiz fonksiyon.
  function handleChange(event) {
    //event nesnesini destruct ederek "name" ve "value" değerlerini alıyoruz.
    const { name, value } = event.target;

    //yapılan her değişiklikte formData stateini dinamik olarak günceller
    setFormData({
      ...formData,
      [name]: value,
    });

    // Eğer name "username" ise kullanıcı adı uzunluğunu kontrol eder ve olması gereken dışında uzunluklarda errors stateine username için hata ekler.
    if (name === "username") {
      if (value.length < 3 || value.length > 50) {
        setErrors({
          ...errors,
          username: "İsim en az 3 en fazla 50 karakter olmalıdır.",
        });
      } else {
        //hatadan çıkıldığı zaman errors stateini sıfırlar
        setErrors({
          ...errors,
          username: "",
        });
      }
    }

    if (name === "contact") {
      // Eğer name "contact" ise ve eposta kullanılıyorsa eposta için gerekli kontrolü yapar ve kontrol dışı durumları errors stateine ekler.
      if (useEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //buradaki "test" ifadesi girilen emaili regex ifade ile kıyaslayarak true veya false değer döndedir
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            contact: "Geçerli bir e-posta adresi giriniz.",
          });
        } else {
          // Geçerliyse errors state'ini sıfırla
          setErrors({
            ...errors,
            contact: "",
          });
        }
      } else {
        // Eğer name "contact" ise ve telefon kullanılıyorsa telefon için gerekli kontrolü yapar ve kontrol dışı durumları errors stateine ekler.
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(value)) {
          setErrors({
            ...errors,
            contact: "Geçerli bir telefon numarası giriniz.",
          });
        } else {
          setErrors({
            ...errors,
            contact: "",
          });
        }
      }
    }
    if (name === "day" || name === "month" || name === "year") {
      setErrors({
        ...errors,
        age: "",
      });
    }
  }
  //kullanıcının seçtiği gün ay ve yıl bilgileri kullanılarak yaşın 18den büyük olup olmadığının kontrolünün yapıldığı fonksiyon
  function isOldEnough() {
    const { day, month, year } = formData;
    //eğer gün, ay veya yıl bilgileri eksikse yaş kontrolü geçersiz kabul edilir ve fonksiyondan çıkılır.
    if (!day || !month || !year) return true;
    //şu anki tarih bilgisi alınır
    const today = new Date();
    // Doğum tarihi oluşturulur ama ay 0 endeksli olduğu için month -1 ifadesi kullanılır.
    const birthDate = new Date(year, month - 1, day);
    //Şu anki yıl ile doğum yılı arasındaki fark
    const age = today.getFullYear() - birthDate.getFullYear();
    //şu anki ay ve doğum ayı arasındaki fark
    const monthDifference = today.getMonth() - birthDate.getMonth();
    //eğer doğum ayı şu anki aydan küçükse veya aynı aydaysak, ancak doğum günü şu anki günden küçükse, yaş hesaplaması güncellenir
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age > 18; // Eğer hesaplanan yaş 18'den büyükse true döner
    }
    //kalan durumlarda yaş 18den büyük olarak döner
    return age >= 18;
  }

  //submit butonuna basıldığında çalışacak olan formu belirlenen APIye ilettiğimiz fonksiyon.
  function handleSubmit(event) {
    event.preventDefault();

    // Kullanıcının yaşının 18den büyük olup olmadığını kontrol ettiğimiz koşullu ifade.eğer yaş 18den küçükse errors stateini günceller ve fonksiyondan çıkar
    if (!isOldEnough()) {
      setErrors({
        ...errors,
        age: "Yaşınız 18'den büyük olmalıdır.",
      });
      return;
    }

    //axios ile yapılacak olan istekte gönderilmek üzere formData stateindeki verileri tuttuğumuz obje
    const data = {
      username: formData.username,
      contact: formData.contact,
      month: formData.month,
      day: formData.day,
      year: formData.year,
    };
    // axios ile post(güncelleme işlemi) isteği yaptığımız yer
    axios
      //belirlenen APİye data objesini göndererek post isteği atılıyor.
      .post("https://reqres.in/api/users", data)
      .then((response) => {
        //başarılı cevap aldığında gelen yanıttan id bilgisi alınarak userData statei güncellenir.
        const userId = response.data.id;
        setUserData({ username: formData.username, userId });
        //useHistory hookunun bir fonksiyonu olan history.push kullanılarak kullanıcı belirlenen sayfaya ID bilgisi ile birlikte yönlendirilir.
        history.push(`/home/${userId}`);
      })
      .catch((error) => {
        //yapılan istek başarısız olduğunda gelen yanıt konsola error mesajı olarak basılır.
        console.error(error);
      });
  }
  //bütün kontroller true değer dönderdiğinde formun valid olmasını sağlayan fonksiyon
  function isFormValid() {
    return (
      //kullanıcı adı uzunluğu 3 ile 50 karakter arasında olmalı
      formData.username.length <= 50 &&
      formData.username.length >= 3 &&
      //kullanıcının eposta veya telefon kullanmak istediği duruma göre gerekli validasyonu sağlar.
      (useEmail
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact)
        : /^[0-9]{10,15}$/.test(formData.contact)) &&
      //contact alanı boş olmamalı
      formData.contact.length > 0 &&
      //month, day ve year alanları seçilmiş olmalı
      formData.month &&
      formData.day &&
      formData.year &&
      //errors statei tamamen boş yani hatasız olmalı
      !errors.username &&
      !errors.contact &&
      !errors.age &&
      //kullanıcının yaşı 18den büyük olup olmadığının kontrolü
      isOldEnough()
    );
  }

  return (
    <LoginFormContainer>
      <FormHeader>
        <BsTwitterX />
        <FormHeaderTitle>Hesabını Oluştur</FormHeaderTitle>
      </FormHeader>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          placeholder="İsim"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        <FormInput
          type={useEmail ? "email" : "tel"}
          name="contact"
          placeholder={useEmail ? "E-posta" : "Telefon"}
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && <ErrorMessage>{errors.contact}</ErrorMessage>}
        <ToggleButton
          type="button"
          onClick={() => setUseEmail((prevValue) => !prevValue)}
        >
          {useEmail ? "Telefon kullan" : "E-posta kullan"}
        </ToggleButton>
        <Text>Doğum Tarihi</Text>
        <BirthdateText>
          Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil
          hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman
          gerekir.
        </BirthdateText>
        <BirthdateText>18 yaşından büyük olmalısınız</BirthdateText>
        <BirthdateContainer>
          <div>
            <BirthdateLabel></BirthdateLabel>
            <Select name="month" value={formData.month} onChange={handleChange}>
              <option value="">Ay</option>
              <option value="1">Ocak</option>
              <option value="2">Şubat</option>
              <option value="3">Mart</option>
              <option value="4">Nisan</option>
              <option value="5">Mayıs</option>
              <option value="6">Haziran</option>
              <option value="7">Temmuz</option>
              <option value="8">Ağustos</option>
              <option value="9">Eylül</option>
              <option value="10">Ekim</option>
              <option value="11">Kasım</option>
              <option value="12">Aralık</option>
            </Select>
          </div>
          <div>
            <BirthdateLabel></BirthdateLabel>
            <Select name="day" value={formData.day} onChange={handleChange}>
              <option value="">Gün</option>
              {/*1den 31e kadar dinamik olarak günler oluşturulur ve her bir öğe için günleri basar. */}
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <BirthdateLabel></BirthdateLabel>
            <Select name="year" value={formData.year} onChange={handleChange}>
              <option value="">Yıl</option>
              {/*1den 100e kadar dinamik olarak yıllar oluşturulur ve her bir öğe için yılları basar. */}
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i} value={new Date().getFullYear() - i}>
                  {new Date().getFullYear() - i}
                </option>
              ))}
            </Select>
          </div>
        </BirthdateContainer>
        {/* {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>} */}
        <SubmitButton type="submit" disabled={!isFormValid()}>
          İleri
        </SubmitButton>
      </Form>
    </LoginFormContainer>
  );
}
