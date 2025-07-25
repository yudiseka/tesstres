import { useState } from "react";

export default function App() {
  const [answers, setAnswers] = useState(Array(20).fill(""));
  const [showResult, setShowResult] = useState(false);
  const [totalYes, setTotalYes] = useState(0);

  const questions = [
    // Manajemen Waktu & Peran
    "Saya merasa bisnis tidak bisa jalan tanpa saya.",
    "Hari-hari saya penuh dengan urusan operasional kecil yang melelahkan.",
    "Waktu saya habis untuk “memadamkan api” — bukan menyusun strategi.",
    "Saya kesulitan membagi waktu antara urusan bisnis dan pribadi.",
    
    // Tim & Delegasi
    "Saya sering merasa harus mengawasi semua pekerjaan tim.",
    "Saya ragu tim saya bisa bekerja mandiri tanpa saya awasi.",
    "Karyawan sering bingung dengan job desc mereka sendiri.",
    "Saya kesulitan merekrut atau mempertahankan orang yang cocok.",
    
    // Sistem & SOP
    "Banyak proses bisnis saya berjalan karena “kebiasaan”, bukan sistem.",
    "Saya belum punya SOP tertulis yang dijalankan secara konsisten.",
    "Kalau karyawan lama resign, saya bingung harus mulai dari mana lagi.",
    "Setiap ada masalah, solusinya tergantung pada saya langsung.",
    
    // Keuangan & Kontrol
    "Saya tidak yakin laporan keuangan saya akurat dan update.",
    "Saya tidak punya gambaran jelas: sebenarnya bisnis ini untung atau rugi.",
    "Saya takut ada kebocoran atau fraud, tapi tidak tahu cara mengontrolnya.",
    "Arus kas sering seret, tapi saya tidak tahu masalah utamanya.",
    
    // Psikologis & Beban Mental
    "Saya sering merasa lelah, cemas, atau jenuh terhadap bisnis saya sendiri.",
    "Saya takut bisnis saya tidak bisa bertahan lama dalam kondisi sekarang.",
    "Saya pernah terpikir untuk menyerah, tapi bingung harus mulai dari mana lagi.",
    "Saya merasa tidak punya tempat curhat yang benar-benar paham kondisi saya sebagai pemilik bisnis."
  ];

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const yesCount = answers.filter((ans) => ans === "YA").length;
    setTotalYes(yesCount);
    setShowResult(true);
  };

  const getAssessment = () => {
    if (totalYes <= 5) {
      return {
        label: "Anda cukup tenang dan punya kontrol atas bisnis. Pertahankan dan terus sempurnakan sistem Anda.",
        color: "text-green-700",
        bgColor: "bg-green-50"
      };
    } else if (totalYes <= 10) {
      return {
        label: "Waspada. Ada tekanan tersembunyi yang mulai menggerogoti fokus dan energi Anda.",
        color: "text-yellow-700",
        bgColor: "bg-yellow-50"
      };
    } else if (totalYes <= 15) {
      return {
        label: "Tingkat stres Anda tinggi. Bisnis mungkin masih jalan, tapi tidak sehat secara struktural.",
        color: "text-orange-700",
        bgColor: "bg-orange-50"
      };
    } else {
      return {
        label: "Alarm Bahaya! Anda sedang dalam tekanan besar. Saatnya mengambil langkah nyata agar tidak burnout.",
        color: "text-red-700",
        bgColor: "bg-red-50"
      };
    }
  };

  const resetTest = () => {
    setAnswers(Array(20).fill(""));
    setShowResult(false);
    setTotalYes(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Seberapa Stres Anda dalam Mengelola Bisnis?
          </h1>
          <p className="text-gray-600 text-lg">
            Jawab semua dengan YA atau TIDAK. Semakin banyak "YA", semakin besar potensi stres yang Anda alami saat ini.
          </p>
        </div>

        {!showResult ? (
          <div className="space-y-8">
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Manajemen Waktu & Peran */}
              <div className="mb-8">
                <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">🔧</span>
                  Manajemen Waktu & Peran
                </h2>
                <div className="space-y-4">
                  {[0, 1, 2, 3].map((idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <label className="text-gray-700 mb-2 md:mb-0 md:mr-4 flex-1">
                        <span className="font-medium">{idx + 1}.</span> {questions[idx]}
                      </label>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "YA")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "YA"
                              ? "bg-green-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          YA
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "TIDAK")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "TIDAK"
                              ? "bg-red-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          TIDAK
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tim & Delegasi */}
              <div className="mb-8">
                <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">👥</span>
                  Tim & Delegasi
                </h2>
                <div className="space-y-4">
                  {[4, 5, 6, 7].map((idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <label className="text-gray-700 mb-2 md:mb-0 md:mr-4 flex-1">
                        <span className="font-medium">{idx + 1}.</span> {questions[idx]}
                      </label>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "YA")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "YA"
                              ? "bg-green-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          YA
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "TIDAK")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "TIDAK"
                              ? "bg-red-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          TIDAK
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sistem & SOP */}
              <div className="mb-8">
                <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">💼</span>
                  Sistem & SOP
                </h2>
                <div className="space-y-4">
                  {[8, 9, 10, 11].map((idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <label className="text-gray-700 mb-2 md:mb-0 md:mr-4 flex-1">
                        <span className="font-medium">{idx + 1}.</span> {questions[idx]}
                      </label>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "YA")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "YA"
                              ? "bg-green-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          YA
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "TIDAK")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "TIDAK"
                              ? "bg-red-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          TIDAK
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keuangan & Kontrol */}
              <div className="mb-8">
                <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">📊</span>
                  Keuangan & Kontrol
                </h2>
                <div className="space-y-4">
                  {[12, 13, 14, 15].map((idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <label className="text-gray-700 mb-2 md:mb-0 md:mr-4 flex-1">
                        <span className="font-medium">{idx + 1}.</span> {questions[idx]}
                      </label>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "YA")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "YA"
                              ? "bg-green-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          YA
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "TIDAK")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "TIDAK"
                              ? "bg-red-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          TIDAK
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Psikologis & Beban Mental */}
              <div className="mb-8">
                <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">😮‍💨</span>
                  Psikologis & Beban Mental
                </h2>
                <div className="space-y-4">
                  {[16, 17, 18, 19].map((idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <label className="text-gray-700 mb-2 md:mb-0 md:mr-4 flex-1">
                        <span className="font-medium">{idx + 1}.</span> {questions[idx]}
                      </label>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "YA")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "YA"
                              ? "bg-green-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          YA
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswerChange(idx, "TIDAK")}
                          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                            answers[idx] === "TIDAK"
                              ? "bg-red-600 text-white shadow-md"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          TIDAK
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={answers.includes("")}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition duration-200 ${
                    answers.includes("")
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  }`}
                >
                  Submit Jawaban & Lihat Hasil
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hasil Penilaian Anda</h2>
              
              <div className={`p-8 rounded-xl shadow-lg ${getAssessment().bgColor} mb-8`}>
                <div className="text-5xl font-bold text-gray-800 mb-4">
                  {totalYes} <span className="text-2xl">dari 20</span>
                </div>
                <p className="text-xl font-semibold mb-2">Jawaban "YA"</p>
                <p className={`text-lg ${getAssessment().color}`}>
                  {getAssessment().label}
                </p>
              </div>

              {/* Penjelasan Penilaian */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Penilaian Sederhana:</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-start">
                    <span className="font-bold text-green-700 mr-2">0–5 Jawaban YA:</span>
                    <span>Anda cukup tenang dan punya kontrol atas bisnis. Pertahankan dan terus sempurnakan sistem Anda.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-yellow-700 mr-2">6–10 Jawaban YA:</span>
                    <span>Waspada. Ada tekanan tersembunyi yang mulai menggerogoti fokus dan energi Anda.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-orange-700 mr-2">11–15 Jawaban YA:</span>
                    <span>Tingkat stres Anda tinggi. Bisnis mungkin masih jalan, tapi tidak sehat secara struktural.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-red-700 mr-2">16–20 Jawaban YA:</span>
                    <span>Alarm Bahaya! Anda sedang dalam tekanan besar. Saatnya mengambil langkah nyata agar tidak burnout.</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Sudah cukup merasa capek sendiri urus bisnis?
                </h3>
                <p className="text-xl mb-2">
                  Buku ini akan bantu Anda membangun sistem, bukan tambah beban.
                </p>
                <p className="text-2xl font-bold mb-6">
                  💡 Saatnya berhenti sibuk — dan mulai rapi & tenang.
                </p>
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Dapatkan Bukunya Sekarang
                </button>
              </div>

              <div className="mt-8">
                <button
                  onClick={resetTest}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  Ulangi Tes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
