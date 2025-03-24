"use client";
import React from "react";
import { Label } from "../../src/components/ui/label";
import { Input } from "../../src/components/ui/input";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//Intersting

export function SignupFormDemo() {
  const [symptons, setSymptons] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");

  const [weight, setWeight] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");

  const [allergies, setAllergies] = useState("");

  const [somking, setSomking] = useState("");

  const [alcohol, setAlcohol] = useState("");

  const [exercise, setExercise] = useState("");

  const [diet, setDiet] = useState("");

  const [lang, setLang] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const navigate = useNavigate();

  async function handleClick() {
    navigate("/result");

    const result = await axios.post(
      " http://localhost:3001/api/v1/information",
      {
        symptoms: ["string"],
        patientInfo: {
          age: age,
          gender: gender,
          height: height,
          weight: weight,
          medicalHistory: [medicalHistory],
          currentMedications: [currentMedications],
          allergies: [allergies],
          lifestyle: {
            smoking: somking,
            alcohol: alcohol,
            exercise: exercise,
            diet: diet,
          },
        },
        lang: lang,
      }
    );

    console.log(result);

    localStorage.setItem("result", JSON.stringify(result.data));
  }

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Health Check
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Provie the listed information to get a health check from AI
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Symptons</Label>
          <Input
            onChange={(e) => {
              setSymptons(e.target.value);
            }}
            id="email"
            placeholder="What is Happening to You"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Age</Label>
          <Input
            id="email"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="How Old are you?"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Height</Label>
          <Input
            id="email"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            placeholder="How Old are you?"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Gender</Label>
          <Input
            id="email"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Weight</Label>
          <Input
            id="email"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">medicalHistory</Label>
          <Input
            id="email"
            onChange={(e) => {
              setMedicalHistory(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">currentMedications</Label>
          <Input
            id="email"
            onChange={(e) => {
              setCurrentMedications(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">allergies</Label>
          <Input
            id="email"
            onChange={(e) => {
              setAllergies(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">smoking</Label>
          <Input
            id="email"
            onChange={(e) => {
              setSomking(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">alcohol</Label>
          <Input
            id="email"
            onChange={(e) => {
              setAlcohol(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">exercise</Label>
          <Input
            id="email"
            onChange={(e) => {
              setExercise(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">diet</Label>
          <Input
            id="email"
            onChange={(e) => {
              setDiet(e.target.value);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">lang</Label>
          <Input
            id="email"
            onChange={(e) => {
              setLang(e.target.value);
              console.log(lang);
            }}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <button
          onClick={handleClick}
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
