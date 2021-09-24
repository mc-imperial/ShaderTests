; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 64
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %45
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %12 "buf1"
               OpMemberName %12 0 "injectionSwitch"
               OpName %14 ""
               OpName %27 "buf0"
               OpMemberName %27 0 "_GLF_uniform_int_values"
               OpName %29 ""
               OpName %45 "_GLF_color"
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 0
               OpDecorate %45 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %11
         %19 = OpTypeVector %6 2
         %21 = OpConstant %6 90955
         %24 = OpTypeInt 32 0
         %25 = OpConstant %24 2
         %26 = OpTypeArray %6 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpConstant %6 1
         %31 = OpTypePointer Uniform %6
         %39 = OpTypeBool
         %43 = OpTypeVector %10 4
         %44 = OpTypePointer Output %43
         %45 = OpVariable %44 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %36 = OpFunctionCall %6 %8
         %37 = OpAccessChain %31 %29 %15 %30
         %38 = OpLoad %6 %37
         %40 = OpIEqual %39 %36 %38
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %59
         %41 = OpLabel
         %46 = OpAccessChain %31 %29 %15 %30
         %47 = OpLoad %6 %46
         %48 = OpConvertSToF %10 %47
         %49 = OpAccessChain %31 %29 %15 %15
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %10 %50
         %52 = OpAccessChain %31 %29 %15 %15
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %10 %53
         %55 = OpAccessChain %31 %29 %15 %30
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %10 %56
         %58 = OpCompositeConstruct %43 %48 %51 %54 %57
               OpStore %45 %58
               OpBranch %42
         %59 = OpLabel
         %60 = OpAccessChain %31 %29 %15 %15
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %10 %61
         %63 = OpCompositeConstruct %43 %62 %62 %62 %62
               OpStore %45 %63
               OpBranch %42
         %42 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %17 = OpAccessChain %16 %14 %15
         %18 = OpLoad %11 %17
         %20 = OpConvertFToS %19 %18
         %22 = OpCompositeConstruct %19 %21 %21
         %23 = OpShiftRightArithmetic %19 %20 %22
         %32 = OpAccessChain %31 %29 %15 %30
         %33 = OpLoad %6 %32
               OpReturnValue %33
               OpFunctionEnd
