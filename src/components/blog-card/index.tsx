import { ChangeEvent, FormEvent, useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

// ✅ Definindo o tipo das props que o BlogCard deve aceitar
type BlogCardProps = {
  loading: boolean;
};

const BlogCard = ({ loading }: BlogCardProps) => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xdkdgldn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          mensagem: form.mensagem,
        }),
      });
      if (response.ok) {
        setEnviado(true);
        setForm({ nome: '', email: '', mensagem: '' });
      } else {
        alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
      }
    } catch (error) {
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
    }
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-gradient-to-br from-base-200 to-base-100 shadow-2xl border border-base-300 rounded-2xl">
        <div className="card-body p-10">
          <h3 className="text-2xl font-extrabold text-primary mb-6 flex items-center gap-2">
            <FaPaperPlane className="text-primary" /> Fale comigo
          </h3>
          {enviado ? (
            <div className="text-green-600 font-semibold text-lg text-center animate-pulse">
              Mensagem enviada com sucesso!
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70" />
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  className="input input-bordered pl-10 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full"
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70" />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={form.email}
                  onChange={handleChange}
                  className="input input-bordered pl-10 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full"
                  required
                />
              </div>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-primary/70" />
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  className="textarea textarea-bordered pl-10 pt-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full min-h-[120px]"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-xl shadow-md hover:scale-105 transition-transform flex items-center gap-2 mx-auto px-8"
                disabled={loading}
              >
                <FaPaperPlane /> {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
