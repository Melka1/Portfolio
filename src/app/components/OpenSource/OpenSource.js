'use client'

import React, { useState } from 'react';
import { DiDart } from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { packages } from '../../constants/constants';
import {
  CopyButton,
  InstallRow,
  InstallSnippet,
  LinkRow,
  MetaLabel,
  PackageAside,
  PackageCard,
  PackageDescription,
  PackageHeader,
  PackageIcon,
  PackageLink,
  PackageList,
  PackageMain,
  PackageName,
  Platform,
  PlatformList,
  Stat,
  StatLabel,
  StatList,
  StatValue,
  VersionBadge,
} from './OpenSourceStyles';

const Package = ({ pkg }) => {
  const [copied, setCopied] = useState(false);

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(pkg.install);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is unavailable over plain HTTP or when permission is
      // denied; the snippet is still selectable by hand.
    }
  };

  return (
    <PackageCard>
      <PackageMain>
        <PackageHeader>
          <PackageIcon aria-hidden='true'>
            <DiDart size='2.4rem' />
          </PackageIcon>
          <PackageName>{pkg.name}</PackageName>
          <VersionBadge>v{pkg.version}</VersionBadge>
        </PackageHeader>

        <PackageDescription>{pkg.description}</PackageDescription>

        <InstallRow>
          <InstallSnippet>{pkg.install}</InstallSnippet>
          <CopyButton type='button' onClick={copyInstall} copied={copied}>
            {copied ? 'Copied' : 'Copy'}
          </CopyButton>
        </InstallRow>
      </PackageMain>

      <PackageAside>
        <StatList>
          {pkg.stats.map(({ label, value }) => (
            <Stat key={label}>
              <StatLabel>{label}</StatLabel>
              <StatValue>{value}</StatValue>
            </Stat>
          ))}
        </StatList>

        <MetaLabel>Platforms</MetaLabel>
        <PlatformList>
          {pkg.platforms.map((platform) => (
            <Platform key={platform}>{platform}</Platform>
          ))}
        </PlatformList>

        <LinkRow>
          <PackageLink href={pkg.visit} primary target='_blank' rel='noopener noreferrer'>
            View on pub.dev
          </PackageLink>
          <PackageLink href={pkg.source} target='_blank' rel='noopener noreferrer'>
            Source
          </PackageLink>
        </LinkRow>
      </PackageAside>
    </PackageCard>
  );
};

const OpenSource = () => (
  <Section id='open-source'>
    <SectionDivider />
    <SectionTitle>Open Source</SectionTitle>
    <SectionText>
      Packages I have published for other developers to build on.
    </SectionText>
    <PackageList>
      {packages.map((pkg) => (
        <Package key={pkg.id} pkg={pkg} />
      ))}
    </PackageList>
  </Section>
);

export default OpenSource;
