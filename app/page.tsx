"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RefreshCw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [participants, setParticipants] = useState("");
  const [winner, setWinner] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getParticipantList = () =>
    participants
      .split("\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

  const pickWinner = () => {
    const list = getParticipantList();
    if (list.length === 0) return;

    setIsSpinning(true);
    setShowResult(false);

    setTimeout(() => {
      const w = list[Math.floor(Math.random() * list.length)];
      setWinner(w);
      setShowResult(true);
      setIsSpinning(false);

      // 🎉 Confetti Blast
      

    }, 1500);
  };

  const reset = () => {
    setParticipants("");
    setWinner(null);
    setShowResult(false);
    setIsSpinning(false);
  };

  const copyWinner = () => {
    if (winner) {
      navigator.clipboard.writeText(winner);
      alert("Winner copied! 🎉");
    }
  };

  const participantCount = getParticipantList().length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center py-12 px-6">
      
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] animate-pulse">
        🎰 Mega Raffle Picker 🎉
      </h1>

      <Card className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            🧑‍🤝‍🧑 Participants
          </CardTitle>
          <CardDescription className="text-white/80">
            One name per line {participantCount > 0 && `(${participantCount} added)`}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Textarea
            ref={textareaRef}
            placeholder="Enter one name per line... 📝"
            className="min-h-[200px] text-lg bg-white/20 text-white placeholder-white/60 border-white/30"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        
        <Button
          size="lg"
          onClick={pickWinner}
          disabled={participantCount < 1 || isSpinning}
          className={cn(
            "h-14 px-10 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.7)] hover:scale-105 transition-all",
            isSpinning && "animate-pulse"
          )}
        >
          {isSpinning ? (
            <>
              <RefreshCw className="mr-2 h-6 w-6 animate-spin" /> 🎲 Spinning...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-6 w-6" /> 🎉 Pick Winner
            </>
          )}
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={reset}
          disabled={isSpinning}
          className="h-14 px-10 text-xl border-white/40 text-white hover:bg-white/20"
        >
          🔄 Reset
        </Button>
      </div>

      {showResult && winner && (
        <Card className="w-full max-w-3xl mt-10 bg-white/10 backdrop-blur-xl border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.3)] rounded-2xl animate-in fade-in zoom-in-95 duration-700">
          
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-4xl drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
              🎉 Winner Announced! 🎉
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center">
            <div className="text-7xl font-extrabold py-8 animate-bounce drop-shadow-[0_0_40px_rgba(255,255,255,0.7)]">
              {winner} 🏆
            </div>

            <Button
              variant="secondary"
              size="lg"
              onClick={copyWinner}
              className="mt-4 bg-white/20 border border-white/30 text-white hover:bg-white/30"
            >
              <Copy className="mr-2 h-5 w-5" /> Copy Winner 📋
            </Button>
          </CardContent>
        </Card>
      )}

    </div>
  );
}
