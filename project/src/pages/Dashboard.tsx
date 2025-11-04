import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* // Header */}
        <div className="flex justify-between items-center gap-5 px-8 py-4 border-b bg-card shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">
            Proje Yönetim Sistemi
          </h1>
          <div className="flex items-center gap-3">
            <Button variant={"outline"}>
              <Link to={"/login"}>Giriş Yap</Link>
            </Button>
            <Button variant={"outline"}>
              <Link to={"/signup"}>Kayıt Ol</Link>
            </Button>
          </div>
        </div>
        {/* // Body */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Proje yönetim body</h2>
          <p className="text-muted-foreground max-w-xl mb-8">
            Burada bilgiler verilebilir.
          </p>
          <Button variant={"outline"}>
            <Link to={"/login"}>Başlayalım</Link>
          </Button>
        </main>
        {/* // Footer */}
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Project — Tüm hakları saklıdır.
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
