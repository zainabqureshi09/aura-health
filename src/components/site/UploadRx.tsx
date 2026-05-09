import { motion } from "framer-motion";
import { Upload, FileCheck2, X } from "lucide-react";
import { useRef, useState } from "react";

export function UploadRx() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File | null) => {
    if (!f) return;
    setFile(f);
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + 7;
      });
    }, 80);
  };

  return (
    <section id="upload" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Prescription upload
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Snap it. <span className="text-gradient">We handle the rest</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Upload your doctor's prescription and our pharmacist will prepare
            and dispatch your order.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-strong rounded-3xl p-8 shadow-elegant"
        >
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files?.[0] ?? null);
            }}
            onClick={() => inputRef.current?.click()}
            className="relative border-2 border-dashed border-white/20 rounded-2xl p-12 text-center cursor-pointer hover:border-primary/60 transition-colors group"
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
            {!file ? (
              <>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary glow-primary grid place-items-center group-hover:scale-110 transition">
                  <Upload className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="mt-5 font-semibold text-lg">
                  Drop your prescription here
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  PNG, JPG or PDF · up to 10MB
                </p>
              </>
            ) : (
              <div className="text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 grid place-items-center">
                      <FileCheck2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      setProgress(0);
                    }}
                    className="p-2 rounded-lg hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-primary"
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {progress < 100 ? `Uploading… ${progress}%` : "Uploaded — pharmacist reviewing"}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
