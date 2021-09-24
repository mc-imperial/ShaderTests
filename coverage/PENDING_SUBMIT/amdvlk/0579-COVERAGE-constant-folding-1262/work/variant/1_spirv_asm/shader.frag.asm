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
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_int_values"
               OpName %25 ""
               OpName %45 "_GLF_color"
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %45 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 1
         %12 = OpTypeFloat 32
         %13 = OpTypeVector %12 2
         %16 = OpConstant %12 0
         %17 = OpTypeBool
         %21 = OpConstant %10 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpConstant %6 0
         %27 = OpTypePointer Uniform %6
         %32 = OpConstant %6 1
         %43 = OpTypeVector %12 4
         %44 = OpTypePointer Output %43
         %45 = OpVariable %44 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %37 = OpFunctionCall %6 %8
         %38 = OpAccessChain %27 %25 %26 %26
         %39 = OpLoad %6 %38
         %40 = OpIEqual %17 %37 %39
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %59
         %41 = OpLabel
         %46 = OpAccessChain %27 %25 %26 %26
         %47 = OpLoad %6 %46
         %48 = OpConvertSToF %12 %47
         %49 = OpAccessChain %27 %25 %26 %32
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %12 %50
         %52 = OpAccessChain %27 %25 %26 %32
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %12 %53
         %55 = OpAccessChain %27 %25 %26 %26
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %12 %56
         %58 = OpCompositeConstruct %43 %48 %51 %54 %57
               OpStore %45 %58
               OpBranch %42
         %59 = OpLabel
         %60 = OpAccessChain %27 %25 %26 %32
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %12 %61
         %63 = OpCompositeConstruct %43 %62 %62 %62 %62
               OpStore %45 %63
               OpBranch %42
         %42 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %14 = OpExtInst %13 %1 UnpackUnorm2x16 %11
         %15 = OpCompositeExtract %12 %14 1
         %18 = OpFOrdEqual %17 %15 %16
               OpSelectionMerge %20 None
               OpBranchConditional %18 %19 %31
         %19 = OpLabel
         %28 = OpAccessChain %27 %25 %26 %26
         %29 = OpLoad %6 %28
               OpReturnValue %29
         %31 = OpLabel
         %33 = OpAccessChain %27 %25 %26 %32
         %34 = OpLoad %6 %33
               OpReturnValue %34
         %20 = OpLabel
               OpUnreachable
               OpFunctionEnd
