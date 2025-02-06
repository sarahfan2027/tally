import Image from "next/image";

interface ProfileCardProps {
  expanded: boolean;
}

const ProfileCard = ({ expanded }: ProfileCardProps) => {
  return (
    <div className="flex items-center pb-4 pl-4 bg-white rounded-lg shadow-md">
      <div className="p-3 pr-2 pt-1">
        <Image
          src="/user.png" // Replace with your image path
          alt="Profile"
          className="rounded-full object-contain"
          width={50}
          height={50}
        />
      </div>

      {expanded && (
        <>
          <div className="pb-2">
            <h2 className="text-lg font-medium">Don't Ruin It</h2>
            <p className="text-sm text-gray-500">Pro Crafter</p>
          </div>

          <div className="ml-8 text-gray-500">
            <span>...</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
