; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 8
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %37
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %8 "f0"
               OpName %12 "s1"
               OpName %21 "f1"
               OpName %37 "_GLF_color"
               OpName %42 "buf1"
               OpMemberName %42 0 "_GLF_uniform_int_values"
               OpName %44 ""
               OpName %68 "buf0"
               OpMemberName %68 0 "_GLF_uniform_float_values"
               OpName %70 ""
               OpDecorate %37 Location 0
               OpDecorate %41 ArrayStride 16
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 1
               OpDecorate %67 ArrayStride 16
               OpMemberDecorate %68 0 Offset 0
               OpDecorate %68 Block
               OpDecorate %70 DescriptorSet 0
               OpDecorate %70 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 10
         %10 = OpConstant %6 9.99999997e-07
         %13 = OpConstant %6 0x1.b38fb8p-127
         %15 = OpConstant %6 0
         %16 = OpTypeBool
         %20 = OpConstant %6 1
         %35 = OpTypeVector %6 4
         %36 = OpTypePointer Output %35
         %37 = OpVariable %36 Output
         %38 = OpTypeInt 32 1
         %39 = OpTypeInt 32 0
         %40 = OpConstant %39 2
         %41 = OpTypeArray %38 %40
         %42 = OpTypeStruct %41
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %45 = OpConstant %38 0
         %46 = OpConstant %38 1
         %47 = OpTypePointer Uniform %38
         %66 = OpConstant %39 1
         %67 = OpTypeArray %6 %66
         %68 = OpTypeStruct %67
         %69 = OpTypePointer Uniform %68
         %70 = OpVariable %69 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %7 Function
         %21 = OpVariable %7 Function
         %11 = OpFMod %6 %9 %10
               OpStore %8 %11
               OpStore %12 %13
         %14 = OpLoad %6 %12
         %17 = OpFOrdEqual %16 %14 %15
               OpSelectionMerge %19 None
               OpBranchConditional %17 %18 %19
         %18 = OpLabel
               OpStore %12 %20
               OpBranch %19
         %19 = OpLabel
         %22 = OpLoad %6 %12
         %23 = OpFMod %6 %9 %22
               OpStore %21 %23
         %24 = OpLoad %6 %21
         %25 = OpIsInf %16 %24
         %26 = OpLoad %6 %8
         %27 = OpLoad %6 %21
         %28 = OpFOrdEqual %16 %26 %27
         %29 = OpLogicalOr %16 %25 %28
         %30 = OpLoad %6 %12
         %31 = OpFOrdEqual %16 %30 %20
         %32 = OpLogicalOr %16 %29 %31
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %61
         %33 = OpLabel
         %48 = OpAccessChain %47 %44 %45 %46
         %49 = OpLoad %38 %48
         %50 = OpConvertSToF %6 %49
         %51 = OpAccessChain %47 %44 %45 %45
         %52 = OpLoad %38 %51
         %53 = OpConvertSToF %6 %52
         %54 = OpAccessChain %47 %44 %45 %45
         %55 = OpLoad %38 %54
         %56 = OpConvertSToF %6 %55
         %57 = OpAccessChain %47 %44 %45 %46
         %58 = OpLoad %38 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpCompositeConstruct %35 %50 %53 %56 %59
               OpStore %37 %60
               OpBranch %34
         %61 = OpLabel
         %62 = OpAccessChain %47 %44 %45 %45
         %63 = OpLoad %38 %62
         %64 = OpConvertSToF %6 %63
         %65 = OpCompositeConstruct %35 %64 %64 %64 %64
               OpStore %37 %65
               OpBranch %34
         %34 = OpLabel
               OpReturn
               OpFunctionEnd
