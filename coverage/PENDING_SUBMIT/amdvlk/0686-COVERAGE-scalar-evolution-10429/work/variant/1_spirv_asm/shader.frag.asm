; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 60
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "i"
               OpName %18 "buf0"
               OpMemberName %18 0 "_GLF_uniform_int_values"
               OpName %20 ""
               OpDecorate %9 Location 0
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpConstant %6 0
         %11 = OpConstantComposite %7 %10 %10 %10 %10
         %12 = OpTypeInt 32 1
         %13 = OpTypePointer Function %12
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 2
         %17 = OpTypeArray %12 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpConstant %12 0
         %22 = OpTypePointer Uniform %12
         %25 = OpConstant %12 1
         %33 = OpTypeBool
         %40 = OpConstantTrue %33
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpVariable %13 Function
               OpStore %9 %11
         %23 = OpAccessChain %22 %20 %21 %21
         %24 = OpLoad %12 %23
         %26 = OpBitwiseAnd %12 %24 %25
               OpStore %14 %26
               OpBranch %27
         %27 = OpLabel
               OpLoopMerge %29 %30 None
               OpBranch %31
         %31 = OpLabel
         %32 = OpLoad %12 %14
         %34 = OpSGreaterThan %33 %32 %21
               OpBranchConditional %34 %28 %29
         %28 = OpLabel
               OpBranch %35
         %35 = OpLabel
               OpLoopMerge %37 %38 None
               OpBranch %39
         %39 = OpLabel
               OpBranchConditional %40 %36 %37
         %36 = OpLabel
         %41 = OpLoad %12 %14
         %42 = OpConvertSToF %6 %41
         %43 = OpAccessChain %22 %20 %21 %25
         %44 = OpLoad %12 %43
         %45 = OpConvertSToF %6 %44
         %46 = OpAccessChain %22 %20 %21 %25
         %47 = OpLoad %12 %46
         %48 = OpConvertSToF %6 %47
         %49 = OpLoad %12 %14
         %50 = OpConvertSToF %6 %49
         %51 = OpCompositeConstruct %7 %42 %45 %48 %50
               OpStore %9 %51
         %52 = OpAccessChain %22 %20 %21 %21
         %53 = OpLoad %12 %52
         %54 = OpSGreaterThan %33 %53 %21
               OpSelectionMerge %56 None
               OpBranchConditional %54 %55 %56
         %55 = OpLabel
               OpBranch %37
         %56 = OpLabel
               OpBranch %38
         %38 = OpLabel
               OpBranch %35
         %37 = OpLabel
               OpBranch %30
         %30 = OpLabel
         %58 = OpLoad %12 %14
         %59 = OpISub %12 %58 %25
               OpStore %14 %59
               OpBranch %27
         %29 = OpLabel
               OpReturn
               OpFunctionEnd
