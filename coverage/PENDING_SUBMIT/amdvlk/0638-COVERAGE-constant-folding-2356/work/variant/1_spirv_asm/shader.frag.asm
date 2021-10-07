; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 67
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %47
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %35 "buf1"
               OpMemberName %35 0 "_GLF_uniform_float_values"
               OpName %37 ""
               OpName %47 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %34 ArrayStride 16
               OpMemberDecorate %35 0 Offset 0
               OpDecorate %35 Block
               OpDecorate %37 DescriptorSet 0
               OpDecorate %37 Binding 1
               OpDecorate %47 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpConstant %6 1
          %9 = OpConstantComposite %7 %8 %8
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %22 = OpTypeMatrix %7 2
         %23 = OpConstant %6 0
         %32 = OpConstant %11 1
         %34 = OpTypeArray %6 %32
         %35 = OpTypeStruct %34
         %36 = OpTypePointer Uniform %35
         %37 = OpVariable %36 Uniform
         %38 = OpTypePointer Uniform %6
         %41 = OpTypeBool
         %45 = OpTypeVector %6 4
         %46 = OpTypePointer Output %45
         %47 = OpVariable %46 Output
         %51 = OpConstant %10 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %24 = OpCompositeConstruct %7 %21 %23
         %25 = OpCompositeConstruct %7 %23 %21
         %26 = OpCompositeConstruct %22 %24 %25
         %27 = OpTranspose %22 %26
         %28 = OpCompositeExtract %6 %27 0 0
         %29 = OpCompositeExtract %6 %27 0 1
         %30 = OpCompositeConstruct %7 %28 %29
         %31 = OpExtInst %7 %1 FMin %9 %30
         %33 = OpCompositeExtract %6 %31 1
         %39 = OpAccessChain %38 %37 %17 %17
         %40 = OpLoad %6 %39
         %42 = OpFOrdEqual %41 %33 %40
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %62
         %43 = OpLabel
         %48 = OpAccessChain %18 %16 %17 %17
         %49 = OpLoad %10 %48
         %50 = OpConvertSToF %6 %49
         %52 = OpAccessChain %18 %16 %17 %51
         %53 = OpLoad %10 %52
         %54 = OpConvertSToF %6 %53
         %55 = OpAccessChain %18 %16 %17 %51
         %56 = OpLoad %10 %55
         %57 = OpConvertSToF %6 %56
         %58 = OpAccessChain %18 %16 %17 %17
         %59 = OpLoad %10 %58
         %60 = OpConvertSToF %6 %59
         %61 = OpCompositeConstruct %45 %50 %54 %57 %60
               OpStore %47 %61
               OpBranch %44
         %62 = OpLabel
         %63 = OpAccessChain %18 %16 %17 %51
         %64 = OpLoad %10 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpCompositeConstruct %45 %65 %65 %65 %65
               OpStore %47 %66
               OpBranch %44
         %44 = OpLabel
               OpReturn
               OpFunctionEnd
