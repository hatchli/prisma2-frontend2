import React from "react";
import Link from "next/link";
import Text from "reusecore/src/elements/Text";
import CopyrightWrapper from "./copyright.style";

import { socialProfile } from "common/src/data/Interior";

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {socialProfile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href="#1">
              <a>
                <i className={profile.icon} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Text content="Copyrights 2020 Hatchli Inc" />
    </CopyrightWrapper>
  );
};

export default Copyright;
