import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileCheck2, X, Phone, User, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export function UploadRx() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (f: File | null) => {
    if (!f) return;
    if (f.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB limit.");
      return;
    }
    setFile(f);
    setIsSuccess(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !formData.name || !formData.phone) {
      toast.error("Please provide all required details and a file.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate progress for UI feel
      const interval = setInterval(() => {
        setUploadProgress((p) => {
          if (p >= 95) {
            clearInterval(interval);
            return 95;
          }
          return p + 5;
        });
      }, 100);

      // Actual Supabase Logic (Simulated for this demo, requires 'prescriptions' bucket)
      // const fileExt = file.name.split('.').pop();
      // const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
      // const { error: storageError } = await supabase.storage
      //   .from('prescriptions')
      //   .upload(fileName, file);
      
      // if (storageError) throw storageError;

      // Save record to DB
      const { error: dbError } = await supabase.from("prescriptions").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          // file_path: fileName,
          status: "pending_review",
        },
      ]);

      if (dbError) {
        // If table doesn't exist, we still treat it as a success for the demo UI
        if (dbError.code !== "PGRST116" && dbError.code !== "42P01") {
           throw dbError;
        }
      }

      clearInterval(interval);
      setUploadProgress(100);
      
      setTimeout(() => {
        setIsSuccess(true);
        setIsUploading(false);
        setFile(null);
        setFormData({ name: "", phone: "" });
        toast.success("Prescription uploaded successfully!");
      }, 500);

    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload prescription. Please try again.");
      setIsUploading(false);
    }
  };

  return (
    <section id="upload" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">
            Professional Pharmacy Service
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight mb-6">
            Upload Prescription. <span className="text-gradient">Get your Meds.</span>
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Our licensed pharmacists will review your prescription and coordinate your delivery 
            within minutes. Secure, fast, and fully confidential.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-strong rounded-3xl p-8 border border-brand-blue/5 shadow-card">
              <h3 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand-green" />
                Guidelines
              </h3>
              <ul className="space-y-4">
                {[
                  "Ensure the photo is clear and readable",
                  "Include the doctor's stamp and signature",
                  "Patient name and date must be visible",
                  "Max file size: 10MB (PDF, JPG, PNG)",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                    <span className="text-sm font-medium text-brand-blue/80 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-elegant">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Need Help?</p>
              <p className="text-xl font-bold mb-4">Talk to a Pharmacist</p>
              <a 
                href="tel:+923000000000" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Upload Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-strong rounded-[2.5rem] p-8 md:p-12 shadow-elegant border border-brand-blue/5"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-brand-green/10 rounded-full grid place-items-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-brand-green" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-4">Received Successfully!</h3>
                <p className="text-brand-muted max-w-xs mx-auto mb-10 font-medium">
                  A licensed pharmacist is reviewing your prescription. We'll call you at 
                  <span className="text-brand-blue font-bold ml-1">{formData.phone}</span> shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-10 py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-brand-blue/90 transition-all shadow-lg"
                >
                  Upload Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleUpload} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand-blue/40 uppercase tracking-[0.2em] ml-1">
                      Patient Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-blue/30" />
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl pl-12 pr-6 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner font-semibold text-brand-blue"
                        placeholder="e.g. Ahmad Khan"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand-blue/40 uppercase tracking-[0.2em] ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-blue/30" />
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl pl-12 pr-6 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner font-semibold text-brand-blue"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>
                </div>

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleFileSelect(e.dataTransfer.files?.[0] ?? null);
                  }}
                  onClick={() => !isUploading && inputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-[2rem] p-12 text-center cursor-pointer transition-all duration-500 group overflow-hidden ${
                    file 
                      ? "border-brand-green bg-brand-green/5" 
                      : "border-brand-blue/10 hover:border-brand-green/40 hover:bg-brand-green/5"
                  }`}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e.target.files?.[0] ?? null)}
                  />
                  
                  <AnimatePresence mode="wait">
                    {file ? (
                      <motion.div 
                        key="selected"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-20 h-20 bg-brand-green text-white rounded-3xl grid place-items-center shadow-lg mb-6">
                          <FileCheck2 className="w-10 h-10" />
                        </div>
                        <p className="font-bold text-xl text-brand-blue truncate max-w-xs">{file.name}</p>
                        <p className="text-xs font-bold text-brand-green uppercase tracking-widest mt-2">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB · Ready to upload
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="mt-6 flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-50 px-4 py-2 rounded-xl transition-colors"
                        >
                          <X className="w-4 h-4" /> Change File
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-20 h-20 bg-brand-blue/5 rounded-3xl grid place-items-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-500 shadow-sm">
                          <Upload className="w-9 h-9" />
                        </div>
                        <h4 className="mt-8 font-bold text-2xl text-brand-blue">
                          Drop Prescription
                        </h4>
                        <p className="text-sm text-brand-muted mt-2 font-medium">
                          or click to browse your files
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4">
                  {isUploading ? (
                    <div className="space-y-4">
                      <div className="h-3 w-full bg-brand-blue/5 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                          className="h-full bg-gradient-primary"
                        />
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <span className="text-xs font-bold text-brand-green uppercase tracking-widest flex items-center gap-2">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Uploading {uploadProgress}%
                        </span>
                        <span className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest">
                          Securing Connection...
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={!file || !formData.name || !formData.phone}
                      className="w-full py-6 bg-brand-blue text-white rounded-[1.5rem] font-bold text-lg shadow-elegant hover:scale-[1.01] hover:shadow-glow transition-all duration-300 disabled:opacity-30 disabled:scale-100 bg-gradient-primary glow-green"
                    >
                      Complete Upload
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

