//Copyright 2022 Catamorphic, Co.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//limitations under the License.

//Code based on https://github.com/launchdarkly/openfeature-node-server/blob/main/src/LaunchDarklyProviderOptions.ts

import { LDLogger } from 'launchdarkly-js-client-sdk';
import {Logger} from "@openfeature/web-sdk";

/**
 * Options for the {@link LaunchDarklyClientProvider}.
 */
export interface LaunchDarklyProviderOptions {
  /**
   * Configures a logger for warnings and errors generated by the provider.
   *
   * The logger can be any object that conforms to the `LDLogger` interface.
   * For a simple implementation that lets you filter by log level, see
   * `basicLogger`. You can also use an instance of `winston.Logger` from
   * the Winston logging package.
   *
   * If you do not set this property, the provider uses `basicLogger` with a
   * minimum level of `info`.
   *
   * By default this will not be the same logger instance used by the SDK.
   * If the provider should share a logger with the SDK, then you will need to
   * provide the logger in the SDK options as well.
   */
  logger?: LDLogger  | Logger;
}