import React, { useEffect, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { Spacer } from "@chakra-ui/react";
import { ethers } from "ethers";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import ABI from "../pages/JSON/ABI.json";
// import CampusAmbassadors from "../pages/JSON/2023/CampusAmbassadors.json";
// import Mentors from "../pages/JSON/2023/Mentors.json";
// import OpenSourceAdvocates from "../pages/JSON/2023/OpenSourceAdvocates.json";
// import OrganizingTeam from "../pages/JSON/2023/OrganizingTeam.json";
// import ProjectAdmins from "../pages/JSON/2023/ProjectAdmins.json";
// import Top100 from "../pages/JSON/Top100.json";                // Data From 2022
// import Contributors from "../pages/JSON/Contributors.json";    // Data From 2022
// import Contributors from "../pages/JSON/2023/Contributors.json";
// import Top100 from "../pages/JSON/2023/Top100.json";
import Confetti from "react-confetti";
import axios from "axios";
const contractAddress = "0x0E2195E4292458eaA9Ee30242Fce440b5a722944";

const Certi_Comp = (props) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const certificateWrapper = React.createRef();
  const [CampusAmbassadors, setCampusAmbassadors] = useState([]);
  const [Contributors, setContributors] = useState([]);
  const [Mentors, setMentors] = useState([]);
  const [OpenSourceAdvocates, setOpenSourceAdvocates] = useState([]);
  const [OrganizingTeam, setOrganizingTeam] = useState([]);
  const [ProjectAdmins, setProjectAdmins] = useState([]);
  const [Top100, setTop100] = useState([]);
  useEffect(() => {
    const getCertificateData = async () => {
      try {
        const resCA = await fetch(
          `/certificatesData/${props.year}/CampusAmbassadors.json`
        );
        const dataCA = await resCA.json();
        const resC = await fetch(
          `/certificatesData/${props.year}/Contributors.json`
        );
        const dataC = await resC.json();
        const resM = await fetch(
          `/certificatesData/${props.year}/Mentors.json`
        );
        const dataM = await resM.json();
        const resOSA = await fetch(
          `/certificatesData/${props.year}/OpenSourceAdvocates.json`
        );
        const dataOSA = await resOSA.json();
        const resOT = await fetch(
          `/certificatesData/${props.year}/OrganizingTeam.json`
        );
        const dataOT = await resOT.json();
        const resPA = await fetch(
          `/certificatesData/${props.year}/ProjectAdmins.json`
        );
        const dataPA = await resPA.json();
        const resT100 = await fetch(
          `/certificatesData/${props.year}/Top100.json`
        );
        const dataT100 = await resT100.json();
        setCampusAmbassadors(dataCA);
        setContributors(dataC);
        setMentors(dataM);
        setOpenSourceAdvocates(dataOSA);
        setOrganizingTeam(dataOT);
        setProjectAdmins(dataPA);
        setTop100(dataT100);
      } catch (error) {
        console.log(error);
      }
    };
    getCertificateData();
  }, [props.year]);

  const DownloadImage = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && props.verified === true) {
      certificateWrapper.current.classList.add("export-mode");

      exportComponentAsPNG(
        certificateWrapper,
        {
          fileName:
            props.Name + "_Cert_" + props.Role + `_GSSoC${props.year}.png`,
        },
        {
          html2CanvasOptions: { backgroundColor: null },
        }
      ).then(() => {
        // Remove the export-specific class after exporting
        certificateWrapper.current.classList.remove("export-mode");
      });
    }
  };

  // const provider = new ethers.providers.JsonRpcProvider("JSON_RPC_PROVIDER");
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.JSON_RPC_PROVIDER
  );
  const privateKey =
    "0x2183467634e8e797c30f4a502ec8eab1a6e648ab8256668300092c4768bffc1d";
  // add funds for ME please.xD

  const wallet = new ethers.Wallet(privateKey, provider);
  // console.log(wallet.address);
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  // console.log(contract);
  const contractWithWallet = contract.connect(wallet);

  function treeMaker(file) {
    let data = file;
    let participantDataArray = [];
    for (let key in data) {
      participantDataArray.push(
        keccak256(JSON.stringify(data[key])).toString("hex")
      );
    }
    const leaves = participantDataArray.map((participant) =>
      keccak256(participant)
    );
    const tree = new MerkleTree(leaves, keccak256, { sort: true });
    return tree;
  }

  // const projectAdminsTree = treeMaker(ProjectAdmins);
  // const mentorsTree = treeMaker(Mentors);
  // const contributorsTree = treeMaker(Contributors);
  // const top100Tree = treeMaker(Top100);
  // const campusAmbassadorsTree = treeMaker(CampusAmbassadors);
  // const openSourceAdvocatesTree = treeMaker(OpenSourceAdvocates);
  // const organizingTeamTree = treeMaker(OrganizingTeam);

  const setVerifiedTrue = () => {
    props.setVerified();
  };

  const checkIfVerified = (email) => {
    const lowerCaseEmail = email.toLowerCase(); // Convert email to lowercase

    // check if lowerCaseEmail is in the verified json
    // if yes, setVerifiedTrue()

    if (props.Role === "Contributor") {
      for (let i = 0; i < Contributors.length; i++) {
        if (Contributors[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Top Contributor") {
      for (let i = 0; i < Top100.length; i++) {
        if (Top100[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Mentor") {
      for (let i = 0; i < Mentors.length; i++) {
        if (Mentors[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Project Admin") {
      for (let i = 0; i < ProjectAdmins.length; i++) {
        if (ProjectAdmins[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Campus Ambassador") {
      for (let i = 0; i < CampusAmbassadors.length; i++) {
        if (CampusAmbassadors[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Speaker") {
      for (let i = 0; i < OpenSourceAdvocates.length; i++) {
        if (OpenSourceAdvocates[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Organizing Team") {
      for (let i = 0; i < OrganizingTeam.length; i++) {
        if (OrganizingTeam[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    return false;
  };

  async function Checker(email) {
    // let singleParticipant = keccak256(
    //   JSON.stringify({
    //     email: email,
    //   })
    // ).toString("hex");
    // const merkleProof = tree.getHexProof(keccak256(singleParticipant));

    // console.log("singleParticipant", singleParticipant);

    // const toTheMoon =
    //   props.Role === "Contributor"
    //     ? await contractWithWallet.verifyContributors(
    //       merkleProof,
    //       singleParticipant
    //     )
    //     : props.Role === "Top Contributor"
    //       ? await contractWithWallet.verifyTop100(merkleProof, singleParticipant)
    //       : props.Role === "Mentor"
    //         ? await contractWithWallet.verifyMentors(merkleProof, singleParticipant)
    //         : props.Role === "Project Admin"
    //           ? await contractWithWallet.verifyPAs(merkleProof, singleParticipant)
    //           : props.Role === "Campus Ambassador"
    //             ? await contractWithWallet.verifyCAs(merkleProof, singleParticipant)
    //             : props.Role === "Speaker"
    //               ? await contractWithWallet.verifyOpenSourceAdvocates(
    //                 merkleProof,
    //                 singleParticipant
    //               )
    //               : props.Role === "Organizing Team"
    //                 ? await contractWithWallet.verifyOrgTeam(merkleProof, singleParticipant)
    //                 : false;

    const toTheMoon = checkIfVerified(email);

    if (toTheMoon) {
      setVerifiedTrue();
      console.log("GG OP EZ");
      const ver_success =
        "Verification successful.\n Achievement Unlocked 🎊!!! \n Proceed to download your hard-earned certificate from below. \n\nHope you had a great time learning & contributing with us. All the best for your future endeavors.";
      alert(ver_success);

      setShowConfetti(true);
      setTimeout(function () {
        setShowConfetti(false);
      }, 8000);
    } else {
      console.log("Never gonna give you up...");
      const ver_failed = `Verification failed.💀\nPlease recheck if you have entered the correct email (used to register in GSSoC'${props?.year.slice(
        2
      )}) & selected the appropriate role from the dropdown. \n\nIf you still feel something is wrong, feel free to make a ticket on the official server regarding the same.`;
      alert(ver_failed);
    }
  }

  const Switcher = () => {
    // var actor =
    //   props.Role === "Contributor"
    //     ? contributorsTree
    //     : props.Role === "Top Contributor"
    //       ? top100Tree
    //       : props.Role === "Mentor"
    //         ? mentorsTree
    //         : props.Role === "Project Admin"
    //           ? projectAdminsTree
    //           : props.Role === "Campus Ambassador"
    //             ? campusAmbassadorsTree
    //             : props.Role === "Speaker"
    //               ? openSourceAdvocatesTree
    //               : props.Role === "Organizing Team"
    //                 ? organizingTeamTree
    //                 : "Diablo";
    Checker(props.Email);
  };

  return (
    <>
      <div className="flex justify-center" id="cert">
        {/* <Image src="/cert.png" height="700" width="1000" alt="Certificate"/> */}
        {props.Role === "Contributor" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_Contrib_Cert.png)`,
            }}
            className={`banner cert-contrib bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Top Contributor" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_TopContrib_Cert.png)`,
            }}
            className={`banner cert-topcontrib bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Mentor" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_Mentor_Cert.png)`,
            }}
            className={`banner cert-mentor bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Project Admin" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_PA_Cert.png)`,
            }}
            className={`banner cert-pa bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Campus Ambassador" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_CA_Cert.png)`,
            }}
            className={`banner cert-ca bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Speaker" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_OSAdvocate_Cert.png)`,
            }}
            className={`banner cert-speaker bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Organizing Team" ? (
          <div
            style={{
              backgroundImage: `url(/certificates/${props.year}/GSSoC_Organiser_Cert.png)`,
            }}
            className={`banner cert-orgteam bg-no-repeat`}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <h6 id="no-mobile-alert" className="text-black dark:text-white">
        * Please download the certificate on the desktop website
      </h6>
      <Spacer mt={20} />
      <button
        type="button"
        className={
          !props.verified
            ? "bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md  dark:text-black font-medium rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
            : "dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
        }
        onClick={Switcher}
        disabled={props.verified}
      >
        Verify
      </button>
      <Spacer mt={5} />
      <button
        type="button"
        className={
          props.verified
            ? "bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md dark:text-black  rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
            : "dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
        }
        onClick={DownloadImage}
        disabled={!props.verified}
      >
        Download Certificate
      </button>
      {showConfetti && <Confetti className="fullscreen" />}
    </>
  );
};

export default Certi_Comp;
