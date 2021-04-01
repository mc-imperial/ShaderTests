; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 51
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %32
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %32 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %32 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 -7563
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %6 0
         %17 = OpConstant %6 1
         %18 = OpTypePointer Uniform %6
         %25 = OpTypeBool
         %29 = OpTypeFloat 32
         %30 = OpTypeVector %29 4
         %31 = OpTypePointer Output %30
         %32 = OpVariable %31 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %15 %16 %17
         %20 = OpLoad %6 %19
         %21 = OpLoad %6 %8
         %22 = OpSDiv %6 %20 %21
         %23 = OpAccessChain %18 %15 %16 %16
         %24 = OpLoad %6 %23
         %26 = OpIEqual %25 %22 %24
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %46
         %27 = OpLabel
         %33 = OpAccessChain %18 %15 %16 %17
         %34 = OpLoad %6 %33
         %35 = OpConvertSToF %29 %34
         %36 = OpAccessChain %18 %15 %16 %16
         %37 = OpLoad %6 %36
         %38 = OpConvertSToF %29 %37
         %39 = OpAccessChain %18 %15 %16 %16
         %40 = OpLoad %6 %39
         %41 = OpConvertSToF %29 %40
         %42 = OpAccessChain %18 %15 %16 %17
         %43 = OpLoad %6 %42
         %44 = OpConvertSToF %29 %43
         %45 = OpCompositeConstruct %30 %35 %38 %41 %44
               OpStore %32 %45
               OpBranch %28
         %46 = OpLabel
         %47 = OpAccessChain %18 %15 %16 %16
         %48 = OpLoad %6 %47
         %49 = OpConvertSToF %29 %48
         %50 = OpCompositeConstruct %30 %49 %49 %49 %49
               OpStore %32 %50
               OpBranch %28
         %28 = OpLabel
               OpReturn
               OpFunctionEnd
