; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 60
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13 %35
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %13 "gl_FragCoord"
               OpName %35 "_GLF_color"
               OpName %38 "buf0"
               OpMemberName %38 0 "_GLF_uniform_int_values"
               OpName %40 ""
               OpDecorate %13 BuiltIn FragCoord
               OpDecorate %35 Location 0
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Input %11
         %13 = OpVariable %12 Input
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 1
         %16 = OpTypePointer Input %10
         %19 = OpConstant %10 10
         %20 = OpTypeBool
         %25 = OpConstant %6 1
         %27 = OpConstant %6 2
         %34 = OpTypePointer Output %11
         %35 = OpVariable %34 Output
         %36 = OpConstant %14 2
         %37 = OpTypeArray %6 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %41 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
               OpStore %8 %9
         %17 = OpAccessChain %16 %13 %15
         %18 = OpLoad %10 %17
         %21 = OpFOrdGreaterThan %20 %18 %19
               OpSelectionMerge %23 None
               OpBranchConditional %21 %22 %23
         %22 = OpLabel
         %24 = OpLoad %6 %8
         %26 = OpIAdd %6 %24 %25
               OpStore %8 %26
               OpBranch %23
         %23 = OpLabel
         %28 = OpLoad %6 %8
         %29 = OpSDiv %6 %28 %27
               OpStore %8 %29
         %30 = OpLoad %6 %8
         %31 = OpIEqual %20 %30 %9
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %55
         %32 = OpLabel
         %42 = OpAccessChain %41 %40 %9 %9
         %43 = OpLoad %6 %42
         %44 = OpConvertSToF %10 %43
         %45 = OpAccessChain %41 %40 %9 %25
         %46 = OpLoad %6 %45
         %47 = OpConvertSToF %10 %46
         %48 = OpAccessChain %41 %40 %9 %25
         %49 = OpLoad %6 %48
         %50 = OpConvertSToF %10 %49
         %51 = OpAccessChain %41 %40 %9 %9
         %52 = OpLoad %6 %51
         %53 = OpConvertSToF %10 %52
         %54 = OpCompositeConstruct %11 %44 %47 %50 %53
               OpStore %35 %54
               OpBranch %33
         %55 = OpLabel
         %56 = OpAccessChain %41 %40 %9 %25
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %10 %57
         %59 = OpCompositeConstruct %11 %58 %58 %58 %58
               OpStore %35 %59
               OpBranch %33
         %33 = OpLabel
               OpReturn
               OpFunctionEnd
