; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 77
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %53
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %53 "_GLF_color"
               OpName %55 "buf0"
               OpMemberName %55 0 "_GLF_uniform_int_values"
               OpName %57 ""
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %53 Location 0
               OpDecorate %54 ArrayStride 16
               OpMemberDecorate %55 0 Offset 0
               OpDecorate %55 Block
               OpDecorate %57 DescriptorSet 0
               OpDecorate %57 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 3
          %8 = OpTypeMatrix %7 3
          %9 = OpTypePointer Function %8
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %26 = OpConstant %6 0
         %27 = OpConstant %17 1
         %38 = OpConstant %6 1
         %47 = OpTypeBool
         %51 = OpTypeVector %6 4
         %52 = OpTypePointer Output %51
         %53 = OpVariable %52 Output
         %54 = OpTypeArray %17 %12
         %55 = OpTypeStruct %54
         %56 = OpTypePointer Uniform %55
         %57 = OpVariable %56 Uniform
         %58 = OpTypePointer Uniform %17
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %22 = OpAccessChain %19 %16 %18 %18
         %23 = OpLoad %6 %22
         %24 = OpAccessChain %19 %16 %18 %18
         %25 = OpLoad %6 %24
         %28 = OpAccessChain %19 %16 %18 %27
         %29 = OpLoad %6 %28
         %30 = OpAccessChain %19 %16 %18 %18
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %19 %16 %18 %27
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %19 %16 %18 %18
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %19 %16 %18 %18
         %37 = OpLoad %6 %36
         %39 = OpCompositeConstruct %7 %21 %23 %25
         %40 = OpCompositeConstruct %7 %26 %29 %31
         %41 = OpCompositeConstruct %7 %33 %35 %37
         %42 = OpCompositeConstruct %8 %39 %40 %41
               OpStore %10 %42
         %43 = OpLoad %8 %10
         %44 = OpExtInst %6 %1 Determinant %43
         %45 = OpAccessChain %19 %16 %18 %27
         %46 = OpLoad %6 %45
         %48 = OpFOrdLessThan %47 %44 %46
               OpSelectionMerge %50 None
               OpBranchConditional %48 %49 %72
         %49 = OpLabel
         %59 = OpAccessChain %58 %57 %18 %18
         %60 = OpLoad %17 %59
         %61 = OpConvertSToF %6 %60
         %62 = OpAccessChain %58 %57 %18 %27
         %63 = OpLoad %17 %62
         %64 = OpConvertSToF %6 %63
         %65 = OpAccessChain %58 %57 %18 %27
         %66 = OpLoad %17 %65
         %67 = OpConvertSToF %6 %66
         %68 = OpAccessChain %58 %57 %18 %18
         %69 = OpLoad %17 %68
         %70 = OpConvertSToF %6 %69
         %71 = OpCompositeConstruct %51 %61 %64 %67 %70
               OpStore %53 %71
               OpBranch %50
         %72 = OpLabel
         %73 = OpAccessChain %58 %57 %18 %27
         %74 = OpLoad %17 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpCompositeConstruct %51 %75 %75 %75 %75
               OpStore %53 %76
               OpBranch %50
         %50 = OpLabel
               OpReturn
               OpFunctionEnd
