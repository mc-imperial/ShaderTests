; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 85
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %66
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f0"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "f1"
               OpName %24 "i"
               OpName %26 "buf1"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %66 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 1
               OpDecorate %66 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %23 = OpTypePointer Function %15
         %25 = OpTypeArray %15 %10
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpConstant %15 1
         %30 = OpTypePointer Uniform %15
         %41 = OpTypeBool
         %43 = OpConstant %6 1.10000002
         %57 = OpConstant %15 2
         %64 = OpTypeVector %6 4
         %65 = OpTypePointer Output %64
         %66 = OpVariable %65 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %24 = OpVariable %23 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %21 = OpAccessChain %17 %14 %16 %16
         %22 = OpLoad %6 %21
               OpStore %20 %22
         %31 = OpAccessChain %30 %28 %16 %29
         %32 = OpLoad %15 %31
               OpStore %24 %32
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %37
         %37 = OpLabel
         %38 = OpLoad %15 %24
         %39 = OpAccessChain %30 %28 %16 %16
         %40 = OpLoad %15 %39
         %42 = OpSLessThan %41 %38 %40
               OpBranchConditional %42 %34 %35
         %34 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpFMul %6 %43 %44
         %46 = OpExtInst %6 %1 FAbs %45
               OpStore %8 %46
         %47 = OpLoad %6 %8
               OpStore %20 %47
               OpBranch %36
         %36 = OpLabel
         %48 = OpLoad %15 %24
         %49 = OpIAdd %15 %48 %29
               OpStore %24 %49
               OpBranch %33
         %35 = OpLabel
         %50 = OpLoad %6 %20
         %51 = OpAccessChain %17 %14 %16 %29
         %52 = OpLoad %6 %51
         %53 = OpFOrdGreaterThan %41 %50 %52
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %55
         %54 = OpLabel
         %56 = OpLoad %6 %20
         %58 = OpAccessChain %17 %14 %16 %57
         %59 = OpLoad %6 %58
         %60 = OpFOrdLessThan %41 %56 %59
               OpBranch %55
         %55 = OpLabel
         %61 = OpPhi %41 %53 %35 %60 %54
               OpSelectionMerge %63 None
               OpBranchConditional %61 %62 %80
         %62 = OpLabel
         %67 = OpAccessChain %30 %28 %16 %57
         %68 = OpLoad %15 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpAccessChain %30 %28 %16 %29
         %71 = OpLoad %15 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpAccessChain %30 %28 %16 %29
         %74 = OpLoad %15 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpAccessChain %30 %28 %16 %57
         %77 = OpLoad %15 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpCompositeConstruct %64 %69 %72 %75 %78
               OpStore %66 %79
               OpBranch %63
         %80 = OpLabel
         %81 = OpAccessChain %30 %28 %16 %29
         %82 = OpLoad %15 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpCompositeConstruct %64 %83 %83 %83 %83
               OpStore %66 %84
               OpBranch %63
         %63 = OpLabel
               OpReturn
               OpFunctionEnd
