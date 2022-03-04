; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 53
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %26
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %26 "_GLF_color"
               OpName %30 "buf0"
               OpMemberName %30 0 "_GLF_uniform_int_values"
               OpName %32 ""
               OpDecorate %26 Location 0
               OpDecorate %29 ArrayStride 16
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpConstant %6 1
         %19 = OpTypeBool
         %23 = OpTypeFloat 32
         %24 = OpTypeVector %23 4
         %25 = OpTypePointer Output %24
         %26 = OpVariable %25 Output
         %27 = OpTypeInt 32 0
         %28 = OpConstant %27 2
         %29 = OpTypeArray %6 %28
         %30 = OpTypeStruct %29
         %31 = OpTypePointer Uniform %30
         %32 = OpVariable %31 Uniform
         %33 = OpConstant %6 0
         %34 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %18 = OpFunctionCall %6 %8
         %20 = OpIEqual %19 %18 %12
               OpSelectionMerge %22 None
               OpBranchConditional %20 %21 %48
         %21 = OpLabel
         %35 = OpAccessChain %34 %32 %33 %33
         %36 = OpLoad %6 %35
         %37 = OpConvertSToF %23 %36
         %38 = OpAccessChain %34 %32 %33 %12
         %39 = OpLoad %6 %38
         %40 = OpConvertSToF %23 %39
         %41 = OpAccessChain %34 %32 %33 %12
         %42 = OpLoad %6 %41
         %43 = OpConvertSToF %23 %42
         %44 = OpAccessChain %34 %32 %33 %33
         %45 = OpLoad %6 %44
         %46 = OpConvertSToF %23 %45
         %47 = OpCompositeConstruct %24 %37 %40 %43 %46
               OpStore %26 %47
               OpBranch %22
         %48 = OpLabel
         %49 = OpAccessChain %34 %32 %33 %12
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %23 %50
         %52 = OpCompositeConstruct %24 %51 %51 %51 %51
               OpStore %26 %52
               OpBranch %22
         %22 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
               OpStore %11 %12
         %13 = OpLoad %6 %11
         %14 = OpIAdd %6 %12 %13
         %15 = OpISub %6 %14 %12
               OpReturnValue %15
               OpFunctionEnd
