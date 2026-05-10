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
          className="mt-12 glass-strong rounded-[2.5rem] p-10 shadow-elegant border border-brand-blue/5"
        >
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files?.[0] ?? null);
            }}
            onClick={() => inputRef.current?.click()}
            className="relative border-2 border-dashed border-brand-blue/10 rounded-[2rem] p-16 text-center cursor-pointer hover:border-brand-green/40 hover:bg-brand-green/5 transition-all duration-500 group"
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
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-primary shadow-lg glow-green grid place-items-center group-hover:scale-110 transition-transform duration-500">
                  <Upload className="w-9 h-9 text-white" />
                </div>
                <p className="mt-8 font-bold text-2xl text-brand-blue">
                  Drop your prescription here
                </p>
                <p className="text-sm text-brand-muted mt-2 font-medium">
                  PNG, JPG or PDF · up to 10MB
                </p>
                <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue/5 text-brand-blue text-sm font-bold group-hover:bg-brand-blue/10 transition-colors">
                  <span>Browse Files</span>
                </div>
              </>
            ) : (
              <div className="text-left max-w-md mx-auto">
                <div className="flex items-center justify-between p-4 glass rounded-2xl border border-brand-blue/5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-blue/5 grid place-items-center">
                      <FileCheck2 className="w-7 h-7 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-blue truncate max-w-[180px]">{file.name}</p>
                      <p className="text-xs text-brand-muted font-bold uppercase tracking-wider mt-0.5">
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
                    className="p-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-8 h-2 rounded-full bg-brand-blue/5 overflow-hidden">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-primary shadow-sm"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">
                    {progress < 100 ? `Uploading… ${progress}%` : "Success"}
                  </p>
                  {progress === 100 && (
                    <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                      Pharmacist reviewing
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
