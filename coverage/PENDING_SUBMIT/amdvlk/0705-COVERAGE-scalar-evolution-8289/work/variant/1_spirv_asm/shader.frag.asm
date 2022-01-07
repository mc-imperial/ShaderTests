; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 87
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %68
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %22 "buf1"
               OpMemberName %22 0 "_GLF_uniform_int_values"
               OpName %24 ""
               OpName %36 "a"
               OpName %39 "i"
               OpName %68 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 1
               OpDecorate %68 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpConstant %9 2
         %21 = OpTypeArray %15 %20
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpConstant %15 1
         %26 = OpTypePointer Uniform %15
         %31 = OpTypeBool
         %35 = OpTypePointer Function %15
         %46 = OpConstant %15 120
         %66 = OpTypeVector %6 4
         %67 = OpTypePointer Output %66
         %68 = OpVariable %67 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %36 = OpVariable %35 Function
         %39 = OpVariable %35 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %27 = OpAccessChain %26 %24 %16 %25
         %28 = OpLoad %15 %27
         %29 = OpAccessChain %26 %24 %16 %16
         %30 = OpLoad %15 %29
         %32 = OpSGreaterThan %31 %28 %30
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %34
         %33 = OpLabel
         %37 = OpAccessChain %26 %24 %16 %25
         %38 = OpLoad %15 %37
               OpStore %36 %38
               OpStore %39 %16
               OpBranch %40
         %40 = OpLabel
               OpLoopMerge %42 %43 None
               OpBranch %44
         %44 = OpLabel
         %45 = OpLoad %15 %39
         %47 = OpSLessThan %31 %45 %46
               OpBranchConditional %47 %41 %42
         %41 = OpLabel
         %48 = OpAccessChain %26 %24 %16 %25
         %49 = OpLoad %15 %48
         %50 = OpLoad %15 %36
         %51 = OpIMul %15 %50 %49
               OpStore %36 %51
               OpBranch %43
         %43 = OpLabel
         %52 = OpLoad %15 %39
         %53 = OpIAdd %15 %52 %25
               OpStore %39 %53
               OpBranch %40
         %42 = OpLabel
         %54 = OpLoad %15 %36
         %55 = OpConvertSToF %6 %54
               OpStore %8 %55
               OpBranch %34
         %34 = OpLabel
         %56 = OpLoad %6 %8
         %57 = OpAccessChain %17 %14 %16 %16
         %58 = OpLoad %6 %57
         %59 = OpExtInst %6 %1 FMax %56 %58
               OpStore %8 %59
         %60 = OpLoad %6 %8
         %61 = OpAccessChain %17 %14 %16 %16
         %62 = OpLoad %6 %61
         %63 = OpFOrdEqual %31 %60 %62
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %82
         %64 = OpLabel
         %69 = OpAccessChain %26 %24 %16 %25
         %70 = OpLoad %15 %69
         %71 = OpConvertSToF %6 %70
         %72 = OpAccessChain %26 %24 %16 %16
         %73 = OpLoad %15 %72
         %74 = OpConvertSToF %6 %73
         %75 = OpAccessChain %26 %24 %16 %16
         %76 = OpLoad %15 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpAccessChain %26 %24 %16 %25
         %79 = OpLoad %15 %78
         %80 = OpConvertSToF %6 %79
         %81 = OpCompositeConstruct %66 %71 %74 %77 %80
               OpStore %68 %81
               OpBranch %65
         %82 = OpLabel
         %83 = OpAccessChain %26 %24 %16 %16
         %84 = OpLoad %15 %83
         %85 = OpConvertSToF %6 %84
         %86 = OpCompositeConstruct %66 %85 %85 %85 %85
               OpStore %68 %86
               OpBranch %65
         %65 = OpLabel
               OpReturn
               OpFunctionEnd
