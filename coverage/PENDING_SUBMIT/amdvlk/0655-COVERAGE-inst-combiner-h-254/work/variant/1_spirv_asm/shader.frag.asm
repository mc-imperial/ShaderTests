; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 62
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %43
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "gl_FragCoord"
               OpName %29 "buf0"
               OpMemberName %29 0 "_GLF_uniform_int_values"
               OpName %31 ""
               OpName %43 "_GLF_color"
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %28 ArrayStride 16
               OpMemberDecorate %29 0 Offset 0
               OpDecorate %29 Block
               OpDecorate %31 DescriptorSet 0
               OpDecorate %31 Binding 0
               OpDecorate %43 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 0
         %15 = OpTypePointer Input %9
         %19 = OpConstant %6 1
         %21 = OpConstant %6 0
         %22 = OpTypeBool
         %24 = OpConstant %6 -1
         %27 = OpConstant %13 2
         %28 = OpTypeArray %6 %27
         %29 = OpTypeStruct %28
         %30 = OpTypePointer Uniform %29
         %31 = OpVariable %30 Uniform
         %32 = OpTypePointer Uniform %6
         %42 = OpTypePointer Output %10
         %43 = OpVariable %42 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %16 = OpAccessChain %15 %12 %14
         %17 = OpLoad %9 %16
         %18 = OpConvertFToS %6 %17
         %20 = OpBitwiseAnd %6 %18 %19
         %23 = OpINotEqual %22 %20 %21
         %25 = OpSelect %6 %23 %21 %24
               OpStore %8 %25
         %26 = OpLoad %6 %8
         %33 = OpAccessChain %32 %31 %21 %21
         %34 = OpLoad %6 %33
         %35 = OpBitwiseOr %6 %26 %34
         %36 = OpNot %6 %35
         %37 = OpAccessChain %32 %31 %21 %21
         %38 = OpLoad %6 %37
         %39 = OpINotEqual %22 %36 %38
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %57
         %40 = OpLabel
         %44 = OpAccessChain %32 %31 %21 %21
         %45 = OpLoad %6 %44
         %46 = OpConvertSToF %9 %45
         %47 = OpAccessChain %32 %31 %21 %19
         %48 = OpLoad %6 %47
         %49 = OpConvertSToF %9 %48
         %50 = OpAccessChain %32 %31 %21 %19
         %51 = OpLoad %6 %50
         %52 = OpConvertSToF %9 %51
         %53 = OpAccessChain %32 %31 %21 %21
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %9 %54
         %56 = OpCompositeConstruct %10 %46 %49 %52 %55
               OpStore %43 %56
               OpBranch %41
         %57 = OpLabel
         %58 = OpAccessChain %32 %31 %21 %19
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %9 %59
         %61 = OpCompositeConstruct %10 %60 %60 %60 %60
               OpStore %43 %61
               OpBranch %41
         %41 = OpLabel
               OpReturn
               OpFunctionEnd
